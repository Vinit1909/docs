export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: ""
    },
    {
        id: "software-proposal",
        label: "Software development proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
        <h1>Software Development Proposal</h1>
        <p>
          Thank you for the opportunity to present our proposal. We’re excited to build 
          a solution that aligns with your objectives and streamlines your processes.
        </p>
        <h2>1. Project Overview</h2>
        <p>
          Provide a high-level description of the scope, goals, and expected outcomes of 
          this software development project.
        </p>
        <h2>2. Deliverables</h2>
        <ul>
          <li>Customized software solution</li>
          <li>Integration with existing systems</li>
          <li>Comprehensive testing and QA</li>
          <li>Technical documentation &amp; training</li>
        </ul>
        <h2>3. Timeline</h2>
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Requirements &amp; Planning</td>
              <td>2 Weeks</td>
            </tr>
            <tr>
              <td>Design &amp; Development</td>
              <td>4 Weeks</td>
            </tr>
            <tr>
              <td>Testing &amp; Review</td>
              <td>2 Weeks</td>
            </tr>
          </tbody>
        </table>
        <h2>4. Budget &amp; Costs</h2>
        <p>
          The total project investment is <strong>$XX,XXX</strong>, covering design, 
          development, testing, and support for the initial launch.
        </p>
        <h2>5. Acceptance</h2>
        <p>
          Please confirm your acceptance by signing below. We look forward to 
          collaborating on this exciting project!
        </p>
      `,
    },
    {
        id: "project-proposal",
        label: "Project proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
        <h1>Project Proposal</h1>
        <p>
          This proposal outlines the objectives, scope, and benefits of the proposed project.
        </p>
        <h2>Objectives</h2>
        <ul>
          <li>Clearly define project requirements</li>
          <li>Outline key milestones and deliverables</li>
          <li>Establish budget and timeline</li>
        </ul>
        <h2>Scope</h2>
        <p>
          Summarize the main tasks and responsibilities required to complete this project successfully.
        </p>
        <h2>Methodology</h2>
        <p>
          Describe the approach, tools, and processes that will be used 
          (e.g., Agile, Waterfall, or a hybrid method).
        </p>
        <h2>Budget &amp; Timeline</h2>
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Duration</th>
              <th>Approx. Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Planning</td>
              <td>1-2 Weeks</td>
              <td>$X,XXX</td>
            </tr>
            <tr>
              <td>Execution</td>
              <td>4-6 Weeks</td>
              <td>$XX,XXX</td>
            </tr>
            <tr>
              <td>Deployment</td>
              <td>1 Week</td>
              <td>$X,XXX</td>
            </tr>
          </tbody>
        </table>
        <p>
          We value your feedback. Please review and let us know if you have any questions.
        </p>
      `,
    },
    {
        id: "business-letter",
        label: "Business letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
        <p><strong>Date:</strong> [Month Day, Year]</p>
        <p><strong>Recipient Name</strong><br/>
        [Recipient Title/Position]<br/>
        [Company Name]<br/>
        [Address Line]</p>
        <p>Dear [Recipient Name],</p>
        <p>
          I am writing regarding [subject]. We appreciate your interest and look forward 
          to discussing the next steps.
        </p>
        <p>
          Please feel free to contact me at your earliest convenience. 
          Thank you for your time and consideration.
        </p>
        <p>Sincerely,</p>
        <p>[Your Name]<br/>
        [Your Title/Position]<br/>
        [Company Name]</p>
      `,
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
        <h1>[Your Name]</h1>
        <p>
          [Address] | [Phone Number] | [Email Address] | [LinkedIn/Portfolio Link]
        </p>
        <hr/>
        <h2>Summary</h2>
        <p>
          Motivated professional with [X years] of experience in [industry/role]. 
          Skilled in [key skills], committed to delivering results.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>Skill One</li>
          <li>Skill Two</li>
          <li>Skill Three</li>
        </ul>
        <h2>Experience</h2>
        <p><strong>[Job Title]</strong>, [Company Name] (Dates)</p>
        <ul>
          <li>Responsibility or achievement #1</li>
          <li>Responsibility or achievement #2</li>
          <li>Responsibility or achievement #3</li>
        </ul>
        <p><strong>[Job Title]</strong>, [Company Name] (Dates)</p>
        <ul>
          <li>Responsibility or achievement #1</li>
          <li>Responsibility or achievement #2</li>
          <li>Responsibility or achievement #3</li>
        </ul>
        <h2>Education</h2>
        <p>
          <strong>[Degree/Certificate]</strong>, [Institution Name] (Year)
        </p>
      `,
    },
    {
        id: "cover-letter",
        label: "Cover letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
        <p><strong>Date:</strong> [Month Day, Year]</p>
        <p><strong>Hiring Manager Name</strong><br/>
        [Company Name]</p>
        <p>Dear [Mr./Ms./Mx. Hiring Manager],</p>
        <p>
          I am writing to express my interest in the [Position Title] at [Company Name]. 
          With [X years] of experience in [relevant field], I have developed a strong 
          background in [mention key skills]. 
        </p>
        <p>
          [Briefly summarize why you are a good fit, mentioning a specific project or achievement.]
        </p>
        <p>
          Thank you for your consideration. I would welcome the opportunity to further discuss 
          how my experience can contribute to [Company Name].
        </p>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      `,
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
        <p><strong>Date:</strong> [Month Day, Year]</p>
        <p>[Recipient Name]<br/>
        [Address Line 1]<br/>
        [Address Line 2]</p>
        <p>Dear [Recipient Name],</p>
        <p>
          I hope this message finds you well. I am writing to [explain reason/purpose]. 
          Please let me know if you require any additional information or have any questions.
        </p>
        <p>
          Thank you for your time and consideration.
        </p>
        <p>Kind regards,</p>
        <p>[Your Name]<br/>
        [Your Title/Position]<br/>
        [Your Organization]</p>
      `,
    },
];
