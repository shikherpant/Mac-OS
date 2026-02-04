import MacWindow from "./MacWindow"
import Terminal from "react-console-emulator"
import "./terminal.scss"

const TerminalWindow = () => {

  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    about: {
      description: 'Short portfolio bio.',
      usage: 'about',
      fn: () => `Hi — I'm a front-end developer building interactive web experiences.\nI enjoy React, design systems, and clean user interfaces.`
    },
    projects: {
      description: 'List sample projects.',
      usage: 'projects',
      fn: () => `1) ElectroStore — an ecommerce website \n2) Mini-Mac — macOS-like web desktop\n3) AR Funbook — Augmented Reality powered app for learning`
    },
    skills: {
      description: 'Show core skills.',
      usage: 'skills',
      fn: () => `JavaScript, React, HTML, CSS, Node.js, UX`
    },
    resume: {
      description: 'Resume link or instruction.',
      usage: 'resume',
      fn: () => `You can view the resume in the Resume window of this portfolio site.`
    },
    contact: {
      description: 'Contact information.',
      usage: 'contact',
      fn: () => `Email: shikherpant@gmail.com\nGitHub: github.com/shikherpant`
    }
  }

  return (
    <div >
        <MacWindow page="terminal">
          <div className="terminal-window">
            <Terminal
                className="editor"
                commands={commands}
                welcomeMessage={`Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

                                Type 'help' to see all available commands, or try:
                                  • about     - Learn about me
                                  • skills    - View my technical skills
                                  • projects  - Check out my work
                                  • experience - See my career history
                                  • contact   - Get in touch

                                Happy exploring! 🚀`}
                promptLabel={'shikherpant:~$'}
                promptLabelStyle={{color:"#00ff00"}}
            />
          </div>
        </MacWindow>
    </div>
  )
}

export default TerminalWindow