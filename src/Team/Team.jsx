import React, { useEffect, useState } from 'react';
import styles from './Team.module.css';
import ceo from '../assets/ceo.webp';
// import cto from '../assets/cto.webp';
import manager from '../assets/manager.webp';
import contentWriter from '../assets/contentWriter.webp';
import graphicDesigner from '../assets/graphicDesigner.webp';

export default function Team() {
  const [animate, setAnimate] = useState(false);
  const [activeMembers, setActiveMembers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const teamMembers = [
    {
      id: 1,
      name: "Sandesh Chhetri",
      position: "Founder & CEO",
      image: ceo,
    },
    // {
    //   id: 2,
    //   name: "Bimal Bhandari",
    //   position: "CTO (Chief Technology Officer)",
    //   image: cto,
    // },
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
  ];
  
  useEffect(() => {
    setActiveMembers([...teamMembers]);
    setAnimate(true);
    
    const handleScroll = () => {
      const element = document.getElementById('team-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const carouselInterval = setInterval(() => {
      setActiveMembers(prevMembers => {
        const newMembers = [...prevMembers];
        const firstMember = newMembers.shift();
        newMembers.push(firstMember);
        return newMembers;
      });
      
      setActiveIndex(prevIndex => (prevIndex + 1) % teamMembers.length);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(carouselInterval);
    };
  }, []);
  
  const handleDotClick = (index) => {
    const targetId = teamMembers[index].id;
  
    let currentIndexOfTarget = activeMembers.findIndex(member => member.id === targetId);
    
    if (currentIndexOfTarget === -1) return;
    const newMembers = [...activeMembers];
    while (newMembers[0].id !== targetId) {
      const firstMember = newMembers.shift();
      newMembers.push(firstMember);
    }
    
    setActiveMembers(newMembers);
    setActiveIndex(index);
  };
  
  const getImageClassName = (memberId) => {
    return `${styles.memberImage} ${memberId === 3 ? styles.adjustedImage : ''}`;
  };
  
  return (
    <div id="team" className={styles.teamContainer}>
      <div className={styles.teamHeader}>
        <h2>Team<span> Madhyam Nepal</span></h2>
      </div>
      
      <div className={styles.teamContent}>
        <div className={styles.teamIntro}>
          <p>
            Meet the creative minds behind Madhyam Nepal.
          </p>
        </div>
        
        <div className={`${styles.teamMembers} ${animate ? styles.animated : ''}`}>
          {activeMembers.slice(0, 3).map((member, index) => (
            <div 
              key={member.id} 
              className={styles.memberCard}
            >
              <div className={styles.memberImageContainer}>
                <img 
                  src={member.image} 
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
              key={member.id}
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View ${member.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}