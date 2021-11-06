// pages/index.js
import ReactPlayer from 'react-player';
import fetch from "isomorphic-fetch";

import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image'

//data
import { getAllPosts } from '../lib/api';
import Layout from "../components/Layout";
import styles from"../styles/index.module.scss";

const Index = ({allPosts:{ edges } }) => (
  <Layout>
    <div className={styles.container}>

    <div className={styles.show_hero}>
      <div className={styles.show_page}>
        <div className={styles.show_title}></div>
        <p className={styles.h4}>WATCH EPISODES</p>
        <div className={styles.show_page_section}>
       

       <div className={styles.video_outer}>
       <h1 className={styles.h1}>START WATCHING</h1>
       <div className={styles.show_video}>
       <ReactPlayer 
       width="100%"
       height="90%"
       url="https://www.youtube.com/watch?v=Zz1dfSHUOAk" 
       controls
       //playing
       />
       </div>
       <div className={styles.slug}>
       <h5 className={styles.slug_date}>S1E1|24/12/20</h5>
       <h7 className={styles.slug_title}>Time for more entertainment</h7>
       </div>  
       </div>
      </div>
      </div>
      </div>
      
    <div className={styles.episodes}>
    <h1 className={styles.floatme}>Episodes</h1>
    <div className={styles.grid}>
        {edges.map(({ node }) => (
        <div className={styles.card} key={node.id}>
          <div className={styles.listitem_thumbnail}>    
          </div>
          <div className={styles.listitem__content}>
        
       
        <div className={styles.episode_video}>
        <ReactPlayer className={styles.react_player}
        width="100%"
                  height="100%"
                url ="https://www.youtube.com/watch?v=6stlCkUDG_s&list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_"
                  //url = { node.extraPostInfo.videoLin.mediaItemUrl }
       controls
       //playing
       />
       </div>
       
       
       <p className={styles.description}>{node.extraPostInfo.description} &nbsp; &nbsp; {node.extraPostInfo.customdate}</p>
       <p>{node.title}</p>
      </div>
    </div>
      ))}
    </div>
    </div>
    
    <div className={styles.clips_show}>
      <h1 className={styles.floatme}>Clips</h1>
    
      <div className={styles.grid}>
          <a href="https://nextjs.org/ds" className={styles.card}>
             <div className={styles.clips_img}><Image 
      src="/dj1.jpg"
      alt="Picture of the author"
      width={290}
      height={150}
    /></div> 
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          <a href="https://nextjs.org/ds" className={styles.card}>
            <div className={styles.clips_img} ><Image 
      src="/d.jpg"
      alt="Picture of the author"
      width={290}
      height={150}
    /></div>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          <a href="https://nextjs.org/ds" className={styles.card}>
            <div className={styles.clips_img}><Image 
      src="/e.jpg"
      alt="Picture of the author"
      width={290}
      height={150}
    /></div>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find the joy &rarr; </p>
          </a>

          
        </div>
      
      </div>

      <div className={styles.line}></div>
      <div className={styles.about_us}>
        <h1 className={styles.aboutus_h1}>About</h1>
        
        <p className={styles.about_content}>Lorem ipsum dolor sit amet,
         Lorem ipsum dolor sit amet. Qui dicta harum sit galisum dolores qui quidem omnis. Et omnis quod et totam asperiores sit quia atque et iure architecto sit corrupti recusandae. Nam doloribus consectetur sit quae facere cum quia deleniti? Qui laborum mollitia et eveniet exercitationem aut voluptatum quod rem fuga autem et minima laborum.

Et corrupti accusantium 33 dolore saepe ut illum consequatur. Ut quibusdam quam ut voluptatem libero et omnis quisquam qui adipisci rerum qui nobis doloremque!

Qui omnis iure sit adipisci quas qui nesciunt quibusdam vel corporis obcaecati ut atque minima ut neque eveniet quo galisum velit. Qui explicabo aliquam et fugit omnis qui aliquam eius eos adipisci rerum! </p>

      </div>

    </div>
  </Layout>
);

export default Index;

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}
