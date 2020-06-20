import React from 'react'

export default function Section() {
  return (
    <>
    <section id="headline">
      <p>Project Team N+2 Gen, experienced in React and jQuery.</p>
    </section>
    <section id="Education">
    <h2>Education</h2>
    <ul>
        <li>Oklahoma State University</li>
        <li>Booker T. Washington High School</li>
    </ul>
</section>

<section id="history" />
  <h2> Work History </h2>
  <ul>
    <h3>Facebook</h3>
    <li>
      <h4>Software Developer</h4>
      <p>Joined the Next Gen team working to develop the next rendition of Facebook's social media app</p>
    </li>
    <h3>Office Max</h3>
    <li>
      <h4>Store Manager</h4>
      <p>Starting off simply cashing people out and helping customers with technical questions about printers.</p>
    </li>
  </ul>
<section/>

<section id="ContactSally">
    <p>My contact information: </p>
    <address id="ContactMe">
        <p>My email is: <a href="mailto:sally@aol.com">sally@aol.com</a></p>
        <p>Call me at: <a href="+16024560964">(602) 2S45-0964</a></p>
        <p>Sally Student <img src="../public/sally.jpg" alt="Ilana"/></p>
    </address>
</section>
</>
  ) 
};


