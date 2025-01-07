
import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Contact from './components/Contact'
import Offering from './components/Review'
import About from './components/About'
import Aboutus from './components/Aboutus'



const page = () => {
  const blogs = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s",
      blogname: "Journalist",
      blogpara: "Reports on current events through interviews, research, and fieldwork, often specializing in areas like politics, business, or entertainment.",

    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlwOf5j0fRPn0dJ8wHh__bhzvsdXj20VJTQ&s",

      blogname: "News Anchor",
      blogpara: "Presents news broadcasts on TV or radio, delivering breaking stories and hosting live segments.",
    },
    {
      image: "https://t4.ftcdn.net/jpg/06/40/07/03/360_F_640070383_9LJ3eTRSvOiwKyrmBYgcjhSlckDnNcxl.jpg",
      blogname: "Investigative Reporter",
      blogpara: "Conducts deep research to uncover hidden truths or expose issues of public interest.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzQADDiV8SOQJCNH5vOUJrRf81qhKLgYzjg&s",
      blogname: "Social Media News Manage",
      blogpara: "Oversees news distribution on social media platforms, ensuring timely and engaging content..",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YOWFhmNL7W4cz6dGvZPiElomX3VJNu4oOA&s",
      blogname: "Editor",
      blogpara: "Reviews, edits, and approves news content for publication, ensuring accuracy and quality.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl5qCjhAMm5yyRAcjXVS5P3RwzYDYWA7eag&s",
      blogname: "Content Strategist for New",
      blogpara: "Develops strategies for publishing news across multiple platforms to engage target audiences.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTPWqH8vaXeRUiZkl7B-VZXCOtHxvBkjWxQ&s",
      blogname: "Multimedia Journalist",
      blogpara: "Combines text, images, audio, and video to create compelling news stories for digital platforms.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFjjYFV7fzUvuuE5FUioTNp7Y4J97a3rw7w&s",
      blogname: "News Producer",
      blogpara: "Plans and coordinates news broadcasts, determining the lineup and ensuring smooth execution.",
    },
  ];
  
  console.log(blogs);
  
  return (
    <div className='bg-black text-white '>
     
     <div className="mb-10 bg-black">
     <Main/>
     </div>
   
   
   
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 mt-10 '>
    {blogs.map((val,ind)=><div className='border border-white 'key={ind}>
      <Offering image={val.image}blogname={val.blogname} blogpara={val.blogpara}/>
    </div>)}
    </div>
   
   
    <Aboutus/>
    <About/>
    </div>
  )
}

export default page