import React from 'react'
import Image from 'next/image';

import Card from './Card';
import styles from '../assets/styles/Portfolio.module.css'

export default function Portfolio() {
  return (
    <> 
      <h2 className={styles.title}>Portfolio</h2>
      <p className={styles.intro}>
        Here are some of the projects I have been working on recently during my time
        as a profesional developer. Unfortunaely I have not had as much time for side
        projects and youtube videos as I would like, and some of my work that I have done
        can not be displayed publically. I am very proud of the work that I am able to
        display on this site at the present time and look forward to having the time to
        post more fun side projects and open source projects in the future.
      </p>
      <section className={styles.cardsContainer}>
        <Card title="QuetCodesFire Youtube Channel" links={{name: 'Youtube Channel', url: 'http://youtube.com/quetcodesfire'}}>
          My youtube channel dedicated to helping others learn in their coding journey as well as documenting what I&apos;m learning.
        </Card>
        <Card title="Fogg" links={{name: 'Repo', url: 'http://github.com/quetcodesfire/fogg'}}>
          Fogg is a component library with tools for rapidly building map applications. 
        </Card>
        <Card title="Cirrus" links={{name: 'Repo', url: 'http://github.com/quetcodesfire/cirrus'}}>
          Cirrus is a STAC-based processing pipeline. As input, Cirrus takes a GeoJSON FeatureCollection with 1 or more STAC Items. This input is run through workflows that generate 1 or more STAC Items as output. These output Items are added to the Cirrus static STAC catalog, and are also broadcast via an SNS topic that can be subscribed to for triggering additional workflows, such as keeping a dynamic STAC catalog up to date (for example, STAC-server).
        </Card>
        <Card title="Stac-CMR" links={{name: 'Repo', url: 'http://github.com/quetcodesfire/stac-cmr'}}>
          An implementation of the SpatioTemporal Asset Catalog API on top of NASA&apos;s Common Metadata Repository.
        </Card>
      </section>
    </>
  )
}