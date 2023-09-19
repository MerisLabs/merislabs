class Project {
  constructor(name, description, tooling, link, video) {
    this.name = name;
    this.description = description;
    this.tooling = tooling;
    this.link = link;
    this.video = video;
  }
}
export const offerings = [
  {
    title: "Software Development",
    url: "/software",
    description: "We build software for startups and enterprises",
    samples: [
      "software1.png",
      "software3.png",
      "software4.png",
      "software5.png",
    ],
    projects: [
      new Project(
        "Candle Stick Chart",
        "A candlestick chart is a style of financial chart used to describe price movements of a security, derivative, or currency.  Each 'candlestick' typically shows one day, thus a one-month chart may show the 20 trading days as 20 candlesticks. Candlestick charts can also be built using intervals shorter or longer than one day.",
        ["React", "Binance api", "Frontend"],
        "https://sisyphus-tomide.vercel.app/",
        "https://user-images.githubusercontent.com/55337742/241746561-b4bbc74e-9729-4285-bf09-e1d830ed323e.mp4"
      ),
      new Project(
        "QorePay Payment Gateway",
        "QorePay is a payment app that allows users to send and receive money from anywhere in the world. It also allows users to pay bills, buy airtime, and make transfers to bank accounts.",
        ["React", "ExpressJs", "AWS", "Fullstack"],
        "https://qorepay.com/",
        "https://user-images.githubusercontent.com/55337742/268929386-345b9e34-a559-417e-b957-3f9971a77ecb.mp4"
      ),
      new Project(
        "JUICE SPEND",
        "Beta website of crypto payment startup. Juice helps African businesses make global payments with local currency.",
        ["React", "MUI", "Frontend"],
        "https://tomidejuiceui.netlify.app/",
        "https://user-images.githubusercontent.com/55337742/211080250-419b92a5-7ef0-423a-be4a-2e0658dca314.mov"
      ),
      new Project(
        "UNICOM",
        `Project Unicom Project Unicom is an app developed for Unilever Nigeria PLC. to ensure compliance with regulatory obligations across various functions identified by Jackson, Etti and Edu. This GitHub repository serves as the documentation for the app and provides an overview of the project. \n Executive Summary Unilever Nigeria engaged Jackson, Etti & Edu (JEE) to develop a company-wide Compliance Manual and conduct a legal audit of its warehouses in Agbara. business across the eight functions.`,
        ["React", "Firebase", "Fullstack"],
        `https://unicomreport.netlify.app/`,
        "https://user-images.githubusercontent.com/55337742/241769519-0da29dbd-d2e7-49e0-a463-bd074a7c4e11.mp4"
      ),
      new Project(
        "Whatsapp Math Solver Bot",
        `A whatsapp bot that solves math problems. It uses the Twilio API to send and receive messages from whatsapp. It uses the Wolfram Alpha API to solve math problems. It uses the Google Cloud API to convert images to text. "`,
        ["Python", "Twilio", "Wolfram Alpha", "Google Cloud"],
        "https://mathcsolvetom.netlify.app/",
        "https://user-images.githubusercontent.com/55337742/227046491-9e8cdf59-dafc-42f1-aacc-82a8dbd13015.mp4"
      ),
      new Project(
        "MVHQ Blog App",
        `This is a simple blog application that allows users to compose and publish blog posts with various content types. It was developed using modern web technologies and follows best practices for building web applications. `,
        ["NextJS", "Formik", "Tailwind CSS", "Shadcn"],
        "https://next-js-blog-app-ochre.vercel.app/",
        "https://user-images.githubusercontent.com/55337742/265371035-425aa3e5-d6af-4dc4-aa5f-da750ce42274.mp4"
      ),

      new Project(
        "Midland",
        ["React"],
        "Financial Services App | Nigeria",
        "https://github.com/tomideadeoye/midlandui",
        `https://user-images.githubusercontent.com/55337742/212472229-c9be4ecd-32ab-41da-bd71-184a6a901288.mp4`
      ),

      new Project(
        "DASH",
        "Money Transfer App | Nigeria",
        ["Flutter", "Django", "Fullstack"],
        "dukka.com",
        `software1.png`
      ),
      new Project(
        "DUKKA",
        "Book keeping App for SMEs",
        ["flutter", "django", "Fullstack"],
        "dukka.com",
        `software2.png`
      ),
      new Project(
        "DEXTER",
        "Analyses company user signups, churn, & more for informed business decisions.",
        ["React", "Django", "Fullstack"],
        "dexter.dukka.com",
        `software3.png`
      ),
    ],

    clients: [
      {
        name: "Jackson Etti and Edu",
        image:
          "https://jee.africa/wp-content/themes/jackson-etti/assets/img/Jackson-Etti-Edu-Logo-size.png",
        description: "Law Firm",
        website: "https://jee.africa/",
      },
      {
        name: "Hermes Advisory Partners",
        image: "/images/hermes.png",
        description: "Investment Bank",
        website: "https://hermesadvisorypartners.co/",
      },
    ],
  },

  {
    title: "Reports & Design",
    url: "/designs",
    description: "Design for businesses and startups",
    samples: [
      "design1.png",
      "design2.png",
      "design3.png",
      "design4.png",
      "design5.png",
      "design6.png",
    ],
    clients: [
      {
        name: "Jackson Etti and Edu",
        image:
          "https://jee.africa/wp-content/themes/jackson-etti/assets/img/Jackson-Etti-Edu-Logo-size.png",
        description: "Law Firm",
        website: "https://jee.africa/",
      },
      {
        name: "Hermes Advisory Partners",
        image: "/images/hermes.png",
        description: "Investment Bank",
        website: "https://hermesadvisorypartners.co/",
      },
    ],

    projects: [],
  },
];

// {
// 	title: "Research & Analytics",
// 	url: "/research",
// 	description: "Research leveraging data analytics tools",
// 	samples: ["software2.png"],
// 	clients: [
// 		{
// 			name: "Microtraction",
// 			image:
// 				"https://jee.africa/wp-content/themes/jackson-etti/assets/img/Jackson-Etti-Edu-Logo-size.png",
// 			description: "Law Firm",
// 			website: "https://jee.africa/",
// 		},
// 		{
// 			name: "Hermes Advisory Partners",
// 			image: "/images/hermes.png",
// 			description: "Investment Bank",
// 			website: "https://hermesadvisorypartners.co/",
// 		},
// 	],
// 	projects: [
// 		new Project(
// 			"A Short Survey on Business Models of Decentralized Finance (DeFi) Protocols.",
// 			"Protocols with efficient and observable business models are more likely to be “secure.” This paper explains the revenue stream of DeFi protocols to help investors and users understand the growth, sustainability, and security of different protocols. The authors discuss the business model of three DeFi protocol domains, abstract the general business model and identify key DeFi actors and actions. The authors conclude by asking research questions on subjects such as the valuation of similar governance tokens, the regulatory sustainability of DeFi business models, and",
// 			["SCRF", "Ethereum", "Smart Contracts", "Research"],
// 			"https://www.smartcontractresearch.org/t/research-summary-a-short-survey-on-business-models-of-decentralized-finance-defi-protocols",
// 			"defibusinessmodel.png"
// 		),

// 		new Project(
// 			"A Source Code Based Taxonomy of Ethereum Smart Contracts",
// 			`Standard categorization of smart contract features could make development more accessible and limit vulnerabilities, particularly through the development of general purpose libraries and interfaces.
// 			The authors examined the source code of 150 smart contracts in 101 DApps. They found 28 dimensions with 64 characteristics for classification in six meta-categories.
// 			The characteristics identified led them to identify 7 clusters for future research and standardisation of libraries.`,
// 			["SCRF", "Ethereum", "Smart Contracts", "Research"],
// 			`https://www.smartcontractresearch.org/t/research-summary-a-source-code-based-taxonomy-for-ethereum-smart-contracts/1367`,
// 			"sourcecodetaxonomy.png"
// 		),
// 		new Project(
// 			"Investigating Arbitrageurs and Oracle Manipulators in Ethereum",
// 			"This paper provides an overview of the most significant security and privacy-related vulnerabilities that affected Ethereum-based smart contracts in 2021; Transaction Ordering Dependence and oracle manipulation. Both vulnerabilities could lead to a significant loss of funds. However, transaction ordering dependence could also result in consensus-layer instability.",
// 			["SCRF", "Ethereum", "Smart Contracts", "Research"],
// 			"https://docs.google.com/document/d/1rM7EqUkjmW_LsuSG-dqrQ__2DZtNIofgwdeYUGz2UUQ/edit#heading=h.ikcr71959rtx",
// 			"Investigating Arbitrageurs and Oracle Manipulators .png"
// 		),
// 		new Project(
// 			"A Formal Specification Smart-Contract Language for Legally Binding DAOs",
// 			"There are several advantages to adopting Blockchain in automating business operations. It makes inter-organizational information exchange easier, and all steps of the contracting processes, the search, negotiation, performance, adjudication, and commitment can be represented in smart contracts. But this is only possible when Smart Contract Languages built for legal and business constructs can formulate complex collaborative business contracts. The paper describes a way of representing business contracts in a smart-legal-contract-markup language (SLCML) before conversion to a Smart Contract Language (SCL) like Solidity.",
// 			["SCRF", "Ethereum", "Smart Contracts", "Research"],
// 			"https://www.smartcontractresearch.org/t/research-summary-a-formal-specification-smart-contract-language-for-legally-binding-decentralized-autonomous-organizations/2425",
// 			"smart contract language for daos.png"
// 		),
// 	],
// },

// new Project(
// 	"A Source Code Based Taxonomy of Ethereum Smart Contracts",
// 	`Standard categorization of smart contract features could make development more accessible and limit vulnerabilities, particularly through the development of general purpose libraries and interfaces.
// 			The authors examined the source code of 150 smart contracts in 101 DApps. They found 28 dimensions with 64 characteristics for classification in six meta-categories.
// 			The characteristics identified led them to identify 7 clusters for future research and standardisation of libraries.`,
// 	["SCRF", "Ethereum", "Smart Contracts", "Research"],
// 	`https://www.smartcontractresearch.org/t/research-summary-a-source-code-based-taxonomy-for-ethereum-smart-contracts/1367`,
// 	"sourcecodetaxonomy.png"
//   ),
//   new Project(
// 	"Investigating Arbitrageurs and Oracle Manipulators in Ethereum",
// 	"This paper provides an overview of the most significant security and privacy-related vulnerabilities that affected Ethereum-based smart contracts in 2021; Transaction Ordering Dependence and oracle manipulation. Both vulnerabilities could lead to a significant loss of funds. However, transaction ordering dependence could also result in consensus-layer instability.",
// 	["SCRF", "Ethereum", "Smart Contracts", "Research"],
// 	"https://docs.google.com/document/d/1rM7EqUkjmW_LsuSG-dqrQ__2DZtNIofgwdeYUGz2UUQ/edit#heading=h.ikcr71959rtx",
// 	"Investigating Arbitrageurs and Oracle Manipulators .png"
//   ),
//   new Project(
// 	"A Formal Specification Smart-Contract Language for Legally Binding DAOs",
// 	"There are several advantages to adopting Blockchain in automating business operations. It makes inter-organizational information exchange easier, and all steps of the contracting processes, the search, negotiation, performance, adjudication, and commitment can be represented in smart contracts. But this is only possible when Smart Contract Languages built for legal and business constructs can formulate complex collaborative business contracts. The paper describes a way of representing business contracts in a smart-legal-contract-markup language (SLCML) before conversion to a Smart Contract Language (SCL) like Solidity.",
// 	["SCRF", "Ethereum", "Smart Contracts", "Research"],
// 	"https://www.smartcontractresearch.org/t/research-summary-a-formal-specification-smart-contract-language-for-legally-binding-decentralized-autonomous-organizations/2425",
// 	"smart contract language for daos.png"
//   ),
