var data = {
  languages: [
    {id: '2313', slug: 'javascript', name: 'Java Script'},
    {id: '2314', slug: 'go', name: 'GO'},
    {id: '2315', slug: 'ruby', name: 'Ruby'}
  ],
  platforms: [
    {id: '2366', slug: 'npm', name: 'NPM'},
    {id: '2367', slug: 'go', name: 'GO'},
    {id: '2368', slug: 'rubygems', name: 'Rubygems'}
  ]
}
var dataLanguage = {
  javascript: {slug: 'javascript', name: 'Java Script'},
  go: {slug: 'go', name: 'GO'},
  ruby: {slug: 'ruby', name: 'Ruby'}
}
var dataPlatform = {
  npm: {slug: 'npm', name: 'NPM'},
  go: {slug: 'go', name: 'GO'},
  rubygems: {slug: 'rubygems', name: 'Rubygems'}
}
var dataPlatformProjects = {
  npm: [
    {platform: 'npm', slug: 'redux', name: 'Redux'},
    {platform: 'npm', slug: 'express', name: 'Express.js'},
    {platform: 'npm', slug: 'react', name: 'React.js'}
  ],
  go: [
    {platform: 'go', slug: 'mux', name: 'Mux'}
  ],
  rubygems: [
    {platform: 'rubygems', slug: 'device', name: 'Device'},
    {platform: 'rubygems', slug: 'activerecord', name: 'Active Record'}
  ]
}
var dataLanguageProjects = {
  javascript: [
    {platform: 'npm', slug: 'redux', name: 'Redux'},
    {platform: 'npm', slug: 'express', name: 'Express.js'},
    {platform: 'npm', slug: 'react', name: 'React.js'}
  ],
  go: [
    {platform: 'go', slug: 'mux', name: 'Mux'}
  ],
  ruby: [
    {platform: 'rubygems', slug: 'device', name: 'Device'},
    {platform: 'rubygems', slug: 'activerecord', name: 'Active Record'}
  ]
}
var dataProject = {
  // npm
  redux: {slug: 'redux', name: 'Redux'},
  express: {slug: 'express', name: 'Express.js'},
  react: {slug: 'react', name: 'React.js'},
  // go
  mux: {slug: 'mux', name: 'Mux'},
  // ruby
  device: {slug: 'device', name: 'Device'},
  activerecord: {slug: 'activerecord', name: 'Active Record'}
}
var dataTutorial = {
  '1': {
    id: '1',
    title: 'Getting started redux',
    content: 'As the requirements for JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage the active route, the selected tab, whether to show a spinner or not, should pagination controls be displayed, and so on.\nManaging this ever-changing state is hard. If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it’s hard to reproduce bugs or add new features.\nAs if this wasn’t bad enough, consider the new requirements becoming common in front-end product development. As developers, we are expected to handle optimistic updates, server-side rendering, fetching data before performing route transitions, and so on. We find ourselves trying to manage a complexity that we have never had to deal with before, and we inevitably ask the question: is it time to give up? The answer is no.\nThis complexity is difficult to handle as we’re mixing two concepts that are very hard for the human mind to reason about: mutation and asynchronicity. I call them Mentos and Coke. Both can be great in separation, but together they create a mess. Libraries like React attempt to solve this problem in the view layer by removing both asynchrony and direct DOM manipulation. However, managing the state of your data is left up to you. This is where Redux enters.\nFollowing in the steps of Flux, CQRS, and Event Sourcing, Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux.',
    languages: [
      {slug: 'javascript', name: 'Java Script'},
      {slug: 'go', name: 'GO'},
      {slug: 'ruby', name: 'Ruby'}
    ],
    platforms: [
      {slug: 'npm', name: 'NPM'},
      {slug: 'go', name: 'GO'},
      {slug: 'rubygems', name: 'Rubygems'}
    ],
    projects: [
      {platform: 'npm', slug: 'redux', name: 'Redux'},
      {platform: 'npm', slug: 'express', name: 'Express.js'},
      {platform: 'npm', slug: 'react', name: 'React.js'}
    ],
    contributors: [
      {username: 'kulakowka', fullName: 'Anton Kulakov'},
      {username: 'gaeron', fullName: 'Dan Abramov'},
      {username: 'tj', fullName: 'TJ Holowaychuk'}
    ]
  },
  '2': {
    id: '2',
    title: 'How to create REST API',
    content: 'Building restful web services, like other programming skills is part art, part science. As the Internet industry progresses, creating a REST API becomes more concrete, with emerging best practices. As RESTful Web services don\'t follow a prescribed standard except for HTTP, it\'s important to build your RESTful API in accordance with industry best practices to ease development and simplify client adoption.\nPresently, there aren\'t a lot of REST API guides to help the lonely developer. RestApiTutorial.com is dedicated to tracking REST API best practices and making resources available to enable quick reference and self education for the development crafts-person. We\'ll discuss both the art and science of creating REST Web services.',
    languages: [
      {slug: 'ruby', name: 'Ruby'}
    ],
    platforms: [
      {slug: 'npm', name: 'NPM'}
    ],
    projects: [
      {platform: 'npm', slug: 'redux', name: 'Redux'},
      {platform: 'npm', slug: 'express', name: 'Express.js'}
    ],
    contributors: [
      {username: 'gaeron', fullName: 'Dan Abramov'},
      {username: 'tj', fullName: 'TJ Holowaychuk'}
    ]
  },
  '3': {
    id: '3',
    title: 'Strapi - is a new node.js framework',
    content: 'When we were graduating at HETIC (french school specialized in web developpment) we had to work on a large amount of projects. The allocated time was always short so we had to work quick and well. At this time, we discovered the benefits of using third-party services through their APIs to build faster and more featured web applications.\nSince when, we\'ve desperatly been looking for a technology allowing us to gain time by automating recurring tasks we had to face. That\'s why, a year ago we decided to build our own framework.\nToday, we launch our company Wistity because we want to share with the world our vision of an ideal web development ecosystem.\nWe believe in flexibility while keeping code property. \nWe believe in APIs and consider they\'are the future of our industry. \nWe believe in modularity because we don\'t want to be trapped in an architecture model like we are with CMSs.\nWe believe that recurring and boring tasks such as user management, data management and authentication should be delivered out of the box.\nWe believe in front-end technologies agnosticism.\nWe believe in data-storage agnosticism.\nAll those believes have led to Strapi…\nWe look forward to hearing from you. Our mission is your success.',
    languages: [
      {slug: 'javascript', name: 'Java Script'},
      {slug: 'go', name: 'GO'}
    ],
    platforms: [
      {slug: 'rubygems', name: 'Rubygems'}
    ],
    projects: [
      {platform: 'npm', slug: 'express', name: 'Express.js'},
      {platform: 'npm', slug: 'react', name: 'React.js'}
    ],
    contributors: [
      {username: 'tj', fullName: 'TJ Holowaychuk'}
    ]
  }
}
var dataProjectTutorials = {
  npm: {
    redux: [
      {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
      {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'},
      {id: '3', title: 'Strapi - is a new node.js framework', content: 'Text for strapi tutorial'}
    ],
    express: [
      {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
      {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'},
      {id: '3', title: 'Strapi - is a new node.js framework', content: 'Text for strapi tutorial'}
    ],
    react: [
      {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
      {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'},
      {id: '3', title: 'Strapi - is a new node.js framework', content: 'Text for strapi tutorial'}
    ]
  }
}
var dataTutorials = [
  {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
  {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'},
  {id: '3', title: 'Strapi - is a new node.js framework', content: 'Text for strapi tutorial'}
]

var dataUser = {
  kulakowka: {username: 'kulakowka', fullName: 'Anton Kulakov'},
  gaeron: {username: 'gaeron', fullName: 'Dan Abramov'},
  tj: {username: 'tj', fullName: 'TJ Holowaychuk'}
}
var dataUserTutorials = {
  kulakowka: [
    {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'}
  ],
  gaeron: [
    {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
    {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'}
  ],
  tj: [
    {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
    {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'},
    {id: '3', title: 'Strapi - is a new node.js framework', content: 'Text for strapi tutorial'}
  ]
}
var dataSuggestSearch = [
  {text: 'redux', value: 'redux'},
  {text: 'react', value: 'react'},
  {text: 'mongodb', value: 'mongodb'},
  {text: 'nodejs', value: 'nodejs'},
  {text: 'flux', value: 'flux'},
  {text: 'ruby on rails', value: 'ruby on rails'},
  {text: 'postgresql', value: 'postgresql'}
]

var dataSuggestProjects = [
  {id: '012031023', platform: 'npm', slug: 'redux', name: 'Redux'},
  {id: '012031024', platform: 'npm', slug: 'express', name: 'Express.js'},
  {id: '012031025', platform: 'rubygems', slug: 'device', name: 'Device'},
  {id: '012031026', platform: 'rubygems', slug: 'activerecord', name: 'Active Record'}
]

var dataComments = {
  '1': [
    {
      id: '11',
      text: 'It is awesome tutorial!!!',
      createdBy: {
        username: 'kulakowka',
        fullName: 'Anton Kulakov'
      }
    },
    {
      id: '12',
      text: 'Redux evolves the ideas of Flux, but avoids its complexity by taking cues from Elm. Whether you have used them or not, Redux only takes a few minutes to get started with.', 
      createdBy: {
        username: 'gaeron',
        fullName: 'Dan Abramov'
      }
    }
  ],
  '2': [
    {
      id: '21',
      text: 'Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. Then you write a special function called a reducer to decide how every action transforms the entire application’s state.', 
      createdBy: {
        username: 'kulakowka',
        fullName: 'Anton Kulakov'
      }
    },
    {
      id: '22',
      text: 'If you’re coming from Flux, there is a single important difference you need to understand. Redux doesn’t have a Dispatcher or support many stores. Instead, there is just a single store with a single root reducing function. As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like there is just one root component in a React app, but it is composed out of many small components.', 
      createdBy: {
        username: 'tj',
        fullName: 'TJ Holowaychuk'
      }
    },
    {
      id: '23',
      text: 'This architecture might seem like an overkill for a counter app, but the beauty of this pattern is how well it scales to large and complex apps.', 
      createdBy: {
        username: 'gaeron',
        fullName: 'Dan Abramov'
      }
    }
  ],
  '3': [
    {
      id: '32',
      text: 'Getting Started with Redux is a video course consisting of 30 videos narrated by Dan Abramov, author of Redux.', 
      createdBy: {
        username: 'tj',
        fullName: 'TJ Holowaychuk'
      }
    },
    {
      id: '31',
      text: 'Redux is in part inspired by Flux, and the most common complaint about Flux is how it makes you write a lot of boilerplate. In this recipe, we will consider how Redux lets us choose how verbose we’d like our code to be, depending on personal style, team preferences, longer term maintainability, and so on.', 
      createdBy: {
        username: 'kulakowka',
        fullName: 'Anton Kulakov'
      }
    },
    {
      id: '33',
      text: 'Why is this beneficial? It is often claimed that constants are unnecessary, and for small projects, this might be correct.', 
      createdBy: {
        username: 'gaeron',
        fullName: 'Dan Abramov'
      }
    }
  ]
}
var dataPopularProjects = [
  {platform: 'npm', slug: 'redux', name: 'Redux'},
  {platform: 'npm', slug: 'express', name: 'Express.js'},
  {platform: 'rubygems', slug: 'device', name: 'Device'},
  {platform: 'rubygems', slug: 'activerecord', name: 'Active Record'}
]