export default function Email({ firstName }: { firstName: string }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <h1>Welcome to Nothing!</h1>
      <p>Dear {firstName},</p>
      <p>
        Thank you for reaching out to us! We are thrilled to have the opportunity to work with you on your upcoming
        project. At Nothing, we pride ourselves on transforming spaces with innovation, creativity, and precision.
      </p>
      <h2>What We Offer:</h2>
      <ul>
        <li>
          Expertise in Architectural Design and Engineering: From initial concept to final completion, we ensure every
          detail is handled with care.
        </li>
        <li>
          Innovative Solutions: Our unique and creative projects, such as eco cave houses and enchanted treehouses,
          showcase our commitment to pushing the boundaries of conventional construction.
        </li>
        <li>
          Customer-Centric Approach: Your satisfaction is our top priority. We work closely with you to understand your
          vision and bring it to life.
        </li>
      </ul>
      <h2>Here&apos;s What Happens Next:</h2>
      <ol>
        <li>
          <strong>Consultation:</strong> One of our team members will contact you soon to discuss your project in more
          detail.
        </li>
        <li>
          <strong>Proposal:</strong> Based on our discussion, we will create a tailored proposal outlining the scope,
          timeline, and costs.
        </li>
        <li>
          <strong>Execution:</strong> Once everything is agreed upon, our expert team will get to work, ensuring a
          smooth and efficient process.
        </li>
      </ol>
      <h2>Why Choose Nothing?</h2>
      <ul>
        <li>Over a decade of experience in delivering exceptional construction projects.</li>
        <li>
          A portfolio of diverse projects, including residential, commercial, industrial, and public infrastructure.
        </li>
        <li>A dedicated team committed to excellence and customer satisfaction.</li>
      </ul>
      <h2>Stay Connected:</h2>
      <p>
        Visit our <a href={process.env.VERCEL_URL}>Website</a> for more information.
      </p>
      <p>
        Thank you once again for choosing Nothing. We look forward to embarking on this journey with you and creating
        something truly remarkable together.
      </p>
      <p>
        Best regards,
        <br />
        John Doe
        <br />
        Project Manager
        <br />
        Nothing
        <br />
        contact@nothing.com
        <br />
        {process.env.VERCEL_URL}
      </p>
      <p>
        <strong>P.S.</strong> If you have any immediate questions or need further assistance, please do not hesitate to
        contact us at (123) 456-7890 or reply to this email.
      </p>
    </div>
  )
}
