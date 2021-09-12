import React from 'react';

import styles from '../assets/styles/Card.module.css'

type CardProps = {
  title: string,
  children: string,
  links: {
    name: string,
    url: string
  }
}



export default function Card({title, children, links}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        {title.toUpperCase()}
      </div>
      <div className={styles.description}>
        {children}
      </div>
      <div className={styles.links}>
        <a href={links.url}>{links.name}</a>
      </div>
    </div>
  )
}