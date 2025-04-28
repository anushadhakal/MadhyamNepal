"use client"

import { useEffect, useState } from "react"
import styles from "./Team.module.css"
import ceo from "../assets/ceo.webp"
import manager from "../assets/manager.webp"
import contentWriter from "../assets/contentWriter.webp"
import graphicDesigner from "../assets/graphicDesigner.webp"
import videoEditor from "../assets/videoEditor.webp"

export default function Team() {
  const [animate, setAnimate] = useState(false)
  
  // CEO is always first in the array and must remain at index 0
  const teamMembers = [
    {
      id: 1,
      name: "Sandesh Chhetri",
      position: "Founder & CEO",
      image: ceo,
    },
    {
      id: 3,
      name: "Rohit Chhetri",
      position: "Manager",
      image: manager,
    },
    {
      id: 4,
      name: "Sushant Ranabhat",
      position: "Content Writer",
      image: contentWriter,
    },
    {
      id: 5,
      name: "Binay Adhikari",
      position: "Graphic Designer",
      image: graphicDesigner,
    },
    {
      id: 6,
      name: "Alish Bhandari",
      position: "Video Editor",
      image: videoEditor,
    },
  ]

  // Start with CEO (index 0) - FORCE this initialization
  const [currentMemberIndex, setCurrentMemberIndex] = useState(() => 0)

  useEffect(() => {
    // Force reset to CEO on component mount to prevent any inconsistency
    setCurrentMemberIndex(0)
    setAnimate(true)

    const handleScroll = () => {
      const element = document.getElementById("team-section")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimate(true)
        } else {
          setAnimate(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Auto-rotation that always returns to CEO after full cycle
    const carouselInterval = setInterval(() => {
      setCurrentMemberIndex(prevIndex => {
        // If we're at the last member, return to CEO (index 0)
        if (prevIndex === teamMembers.length - 1) {
          return 0
        }
        // Otherwise move to next member
        return prevIndex + 1
      })
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(carouselInterval)
    }
  }, [teamMembers.length])

  const handleDotClick = (index) => {
    // Force reset animation to ensure smooth transition
    setAnimate(false)
    setTimeout(() => {
      setCurrentMemberIndex(index)
      setAnimate(true)
    }, 10)
  }

  const getImageClassName = (memberId) => {
    return `${styles.memberImage} ${memberId === 5 ? styles.adjustedImage : ""}`
  }

  // Function to get the three members to display (CEO always first in sequence)
  const getDisplayedMembers = () => {
    // Always start with current member
    const members = [teamMembers[currentMemberIndex]]
    
    // Add next member in sequence
    members.push(teamMembers[(currentMemberIndex + 1) % teamMembers.length])
    
    // Add following member
    members.push(teamMembers[(currentMemberIndex + 2) % teamMembers.length])
    
    return members
  }

  // FORCE CEO to be first on initial render
  const displayedMembers = currentMemberIndex === 0 ? 
    [teamMembers[0], teamMembers[1], teamMembers[2]] : 
    getDisplayedMembers()

  return (
    <div id="team" className={styles.teamContainer}>
      <div className={styles.teamHeader}>
        <h2>
          Team<span> Madhyam Nepal</span>
        </h2>
      </div>

      <div className={styles.teamContent}>
        <div className={styles.teamIntro}>
          <p>Meet the creative minds behind Madhyam Nepal.</p>
        </div>

        <div className={`${styles.teamMembers} ${animate ? styles.animated : ""}`} id="team-section">
          {displayedMembers.map((member, index) => (
            <div key={`member-${member.id}-${index}`} className={styles.memberCard}>
              <div className={styles.memberImageContainer}>
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className={getImageClassName(member.id)}
                />
                <div className={styles.imageBorder}></div>
              </div>

              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dotNavigation}>
          {teamMembers.map((member, index) => (
            <button
              key={`dot-${member.id}`}
              className={`${styles.dot} ${index === currentMemberIndex ? styles.activeDot : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View ${member.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}