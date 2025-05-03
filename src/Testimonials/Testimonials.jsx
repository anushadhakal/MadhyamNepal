"use client"

import { useEffect, useState } from "react"
import styles from "./Testimonials.module.css"

export default function Reviews() {
  const [animate, setAnimate] = useState(false)
  
  const reviews = [
    {
      id: 1,
      name: "Ramesh Shrestha",
      review: "Madhyam Nepal transformed our online presence completely. Their social media and SEO strategies helped us a lot. Best marketing agency in Pokhara! Highly Recommended.",
      stars: 5,
    },
    // {
    //   id: 2,
    //   name: "Sunita Gurung",
    //   review: "Working with Madhyam Nepal was a game-changer for our business. Their digital marketing helped us attract many new customers in just a short time.",
    //   stars: 5,
    // },
    {
      id: 3,
      name: "Kiran Thapa",
      review: "We needed to grow our online brand. Madhyam Nepal created a perfect strategy for us. Our sales have doubled since working with them.",
      stars: 5,
    },
    {
      id: 4,
      name: "Anjali Poudel",
      review: "The team understands local needs while bringing global expertise. Their campaigns brought in both locals and tourists to our business. Best Work Experience! Highly Recommended.",
      stars: 4,
    },
    // {
    //   id: 5,
    //   name: "Dipak Sharma",
    //   review: "Professional, creative, and results-driven. Madhyam Nepal helped us develop our brand identity and implemented effective digital campaigns.",
    //   stars: 5,
    // },
    {
      id: 6,
      name: "Sarita Basnet",
      review: "Madhyam Nepal's marketing strategies connected us with the perfect customers. Their understanding of our market needs was impressive.",
      stars: 5,
    },
  ]
  const [currentReviewIndex, setCurrentReviewIndex] = useState(() => 0)

  useEffect(() => {
    setCurrentReviewIndex(0)
    setAnimate(true)

    const handleScroll = () => {
      const element = document.getElementById("reviews-section")
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
    const carouselInterval = setInterval(() => {
      setCurrentReviewIndex(prevIndex => {
        if (prevIndex === reviews.length - 1) {
          return 0
        }
        return prevIndex + 1
      })
    }, 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(carouselInterval)
    }
  }, [reviews.length])

  const handleDotClick = (index) => {
    setAnimate(false)
    setTimeout(() => {
      setCurrentReviewIndex(index)
      setAnimate(true)
    }, 10)
  }

  const renderStars = (count) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < count ? styles.filledStar : styles.emptyStar}>
        {i < count ? "★" : "☆"}
      </span>
    ))
  }

  const getDisplayedReviews = () => {
    // Show current review and potentially next review(s) depending on screen size
    return [reviews[currentReviewIndex]]
  }

  const displayedReview = getDisplayedReviews()

  

  return (
    <div id="reviews" className={styles.reviewsContainer}>
      <div className={styles.reviewsHeader}>
        <h2>
          Client <span>Success Stories</span>
        </h2>
      </div>

      <div className={styles.reviewsContent}>
        <div className={styles.reviewsIntro}>
          <p>
            See how <strong>Madhyam Nepal</strong>, the leading digital marketing agency in Pokhara, 
            has transformed businesses into recognizable brands with our tailored marketing solutions.
          </p>
        </div>

        <div className={`${styles.reviewsSlider} ${animate ? styles.animated : ""}`} id="reviews-section">
          {displayedReview.map((review) => (
            <div key={`review-${review.id}`} className={styles.reviewCard}>
              <div className={styles.stars}>
                {renderStars(review.stars)}
              </div>
              
              <div className={styles.reviewText}>
                <p>"{review.review}"</p>
              </div>

              <div className={styles.reviewerInfo}>
                <h3 className={styles.reviewerName}>{review.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dotNavigation}>
          {reviews.map((review, index) => (
            <button
              key={`dot-${review.id}`}
              className={`${styles.dot} ${index === currentReviewIndex ? styles.activeDot : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View review from ${review.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}