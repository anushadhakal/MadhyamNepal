// "use client"

// import { useEffect, useState } from "react"
// import styles from "./Team.module.css"
// import ceo from "../assets/ceo.webp"
// import cto from "../assets/cto.webp"
// import manager from "../assets/managerNew.webp"
// import contentWriter from "../assets/contentWriter.webp"
// import graphicDesigner from "../assets/graphicDesigner.webp"
// import videoEditor from "../assets/videoEditor.webp"

// export default function Team() {
//   const [animate, setAnimate] = useState(false)
  
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Sandesh Chhetri",
//       position: "Founder & CEO",
//       image: ceo,
//     },
//     {
//       id: 2,
//       name: "Bimal Bhandari",
//       position: "CTO (Chief Technology Officer)",
//       image: cto,
//     },
//     {
//       id: 3,
//       name: "Rohit Chhetri",
//       position: "Manager",
//       image: manager,
//     },
//     {
//       id: 4,
//       name: "Sushant Ranabhat",
//       position: "Content Writer",
//       image: contentWriter,
//     },
//     {
//       id: 5,
//       name: "Binay Adhikari",
//       position: "Graphic Designer",
//       image: graphicDesigner,
//     },
//     {
//       id: 6,
//       name: "Alish Bhandari",
//       position: "Video Editor",
//       image: videoEditor,
//     },
//   ]
//   const [currentMemberIndex, setCurrentMemberIndex] = useState(() => 0)

//   useEffect(() => {
//     setCurrentMemberIndex(0)
//     setAnimate(true)

//     const handleScroll = () => {
//       const element = document.getElementById("team-section")
//       if (element) {
//         const position = element.getBoundingClientRect()
//         if (position.top < window.innerHeight && position.bottom >= 0) {
//           setAnimate(true)
//         } else {
//           setAnimate(false)
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     const carouselInterval = setInterval(() => {
//       setCurrentMemberIndex(prevIndex => {
//         if (prevIndex === teamMembers.length - 1) {
//           return 0
//         }
//         return prevIndex + 1
//       })
//     }, 3000)

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//       clearInterval(carouselInterval)
//     }
//   }, [teamMembers.length])

//   const handleDotClick = (index) => {
//     setAnimate(false)
//     setTimeout(() => {
//       setCurrentMemberIndex(index)
//       setAnimate(true)
//     }, 10)
//   }

//   const getImageClassName = (memberId) => {
//     if (memberId === 2) return `${styles.memberImage} ${styles.ctoImage}`
//     if (memberId === 5) return `${styles.memberImage} ${styles.graphicDesignerImage}`
//     if (memberId === 6) return `${styles.memberImage} ${styles.videoEditorImage}`
//     return styles.memberImage
//   }
//   const getDisplayedMembers = () => {
//     const members = [teamMembers[currentMemberIndex]]

//     members.push(teamMembers[(currentMemberIndex + 1) % teamMembers.length])
    
//     members.push(teamMembers[(currentMemberIndex + 2) % teamMembers.length])
    
//     return members
//   }

//   const displayedMembers = currentMemberIndex === 0 ? 
//     [teamMembers[0], teamMembers[1], teamMembers[2]] : 
//     getDisplayedMembers()

//   return (
//     <div id="team" className={styles.teamContainer}>
//       <div className={styles.teamHeader}>
//         <h2>
//           Team<span> Madhyam Nepal</span>
//         </h2>
//       </div>

//       <div className={styles.teamContent}>
//         <div className={styles.teamIntro}>
//           <p>Meet the creative minds behind Madhyam Nepal.</p>
//         </div>

//         <div className={`${styles.teamMembers} ${animate ? styles.animated : ""}`} id="team-section">
//           {displayedMembers.map((member, index) => (
//             <div key={`member-${member.id}-${index}`} className={styles.memberCard}>
//               <div className={styles.memberImageContainer}>
//                 <img
//                   src={member.image || "/placeholder.svg"}
//                   alt={member.name}
//                   className={getImageClassName(member.id)}
//                 />
//                 <div className={styles.imageBorder}></div>
//               </div>

//               <div className={styles.memberInfo}>
//                 <h3 className={styles.memberName}>{member.name}</h3>
//                 <p className={styles.memberPosition}>{member.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className={styles.dotNavigation}>
//           {teamMembers.map((member, index) => (
//             <button
//               key={`dot-${member.id}`}
//               className={`${styles.dot} ${index === currentMemberIndex ? styles.activeDot : ""}`}
//               onClick={() => handleDotClick(index)}
//               aria-label={`View ${member.name}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import styles from "./Team.module.css"
import ceo from "../assets/ceo.webp"
import cto from "../assets/cto.webp"
import manager from "../assets/managerNew.webp"
import contentWriter from "../assets/contentWriter.webp"
import graphicDesigner from "../assets/graphicDesigner.webp"
import videoEditor from "../assets/videoEditor.webp"

export default function Team() {
  const [animate, setAnimate] = useState(false)
  
  const teamMembers = [
    {
      id: 1,
      name: "Sandesh Chhetri",
      position: "Founder & CEO",
      image: ceo,
    },
    {
      id: 2,
      name: "Bimal Bhandari",
      position: "CTO (Chief Technology Officer)",
      image: cto,
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
  const [currentMemberIndex, setCurrentMemberIndex] = useState(() => 0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
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
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNextSlide = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setAnimate(false)
    
    setTimeout(() => {
      setCurrentMemberIndex(prevIndex => (prevIndex + 1) % teamMembers.length)
      setAnimate(true)
      
      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    }, 10)
  }

  const handleDotClick = (index) => {
    if (isAnimating || index === currentMemberIndex) return
    
    setIsAnimating(true)
    setAnimate(false)
    
    setTimeout(() => {
      setCurrentMemberIndex(index)
      setAnimate(true)
      
      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    }, 10)
  }

  const getImageClassName = (memberId) => {
    if (memberId === 2) return `${styles.memberImage} ${styles.ctoImage}`
    if (memberId === 5) return `${styles.memberImage} ${styles.graphicDesignerImage}`
    if (memberId === 6) return `${styles.memberImage} ${styles.videoEditorImage}`
    return styles.memberImage
  }
  
  const getDisplayedMembers = () => {
    const members = [teamMembers[currentMemberIndex]]

    members.push(teamMembers[(currentMemberIndex + 1) % teamMembers.length])
    
    members.push(teamMembers[(currentMemberIndex + 2) % teamMembers.length])
    
    return members
  }

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
            <div 
              key={`member-${member.id}-${index}`} 
              className={`${styles.memberCard} ${index === 2 ? styles.rightmostCard : ''}`}
              onClick={index === 2 ? handleNextSlide : undefined}
            >
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
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}