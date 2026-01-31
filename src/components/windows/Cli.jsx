import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState,}) => {
const commands = {
  about: {
    description: 'Know about me',
    usage: 'about',
    fn: () =>
      `Hey 👋
I'm Azam Shaikh, a web developer who enjoys building clean and interactive web apps.
I mainly work with React and Node.js and love turning ideas into real products.`
  },

  skills: {
    description: 'My technical skills',
    usage: 'skills',
    fn: () =>
      `Frontend:
  - React
  - JavaScript
  - HTML, CSS, SCSS
  - Tailwind CSS

Backend:
  - Node.js
  - Express

Database:
  - MongoDB

Tools:
  - Git & GitHub
  - Vite
  - VS Code`
  },

  projects: {
    description: 'Some projects I worked on',
    usage: 'projects',
    fn: () =>
      `1. Portfolio Website
   - Built using React and Vite

2. MacOS Style Web UI
   - Window system, terminal, dock UI

3. Notes App
   - CRUD app using Node.js and MongoDB

4. Mini AI-based Project
   - Learning and experimenting with AI features`
  },

  experience: {
    description: 'My experience',
    usage: 'experience',
    fn: () =>
      `Currently:
  - Final year CSE student
  - Learning full-stack development

Previous:
  - Frontend projects using React
  - Backend practice with Node & MongoDB

Always improving and learning new things 🚀`
  },

  contact: {
    description: 'Contact details',
    usage: 'contact',
    fn: () =>
      `Email: azamshaikh.dev@gmail.com
GitHub: github.com/yourusername
LinkedIn: linkedin.com/in/yourusername`
  },

  github: {
    description: 'Open my GitHub profile',
    usage: 'github',
    fn: () => {
      window.open('https://github.com/yourusername', '_blank')
      return 'Opening GitHub profile...'
    }
  },

  resume: {
    description: 'View my resume',
    usage: 'resume',
    fn: () => 'Resume will be available soon 🙂'
  },

  social: {
    description: 'Social links',
    usage: 'social',
    fn: () =>
      `GitHub   → github.com/yourusername
LinkedIn → linkedin.com/in/yourusername`
  },

  echo: {
    description: 'Print text',
    usage: 'echo <text>',
    fn: (...args) => args.join(' ')
  }
}


const welcomeMessage = `
Welcome 👋

This is my personal portfolio terminal.
You can explore my profile using simple commands.

Try typing:
  about
  skills
  projects
  experience
  contact

Type 'help' anytime to see all commands.

Have fun exploring 🚀
`



    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'AzamShaikh:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli