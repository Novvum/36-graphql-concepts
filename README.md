<h1 align="center">
  36 Concepts Every GraphQL Developer Should Know - WIP
  <br><br>
</h1>

## Introduction

This repository was created with the intention of helping developers master their concepts in GraphQL. It is not a requirement, but a guide for future studies.

Credit to https://github.com/leonardomso/33-js-concepts for the inspiration.

Thanks to [@kelseyyim](https://github.com/kelseyyim) for getting this started!

## Community

Feel free to submit a PR adding a link to your own recaps or reviews. If you want to translate the repo into your native language, please feel free to do so.

All the translations for this repo will be listed below:

---

## Table of Contents
### Specs
1. **[Queries](#1-queries)**
2. **[Mutations](#2-mutations)**
3. **[Subscriptions](#3-subscriptions)**
4. **[Types](#4-types)**
5. **[Fields](#5-fields)**
6. **[Root Field](#6-root-field)**
7. **[Relationships](#7-relationships)**
8. **[Introspection](#8-introspection)**
9. **[Arguments](#9-arguments)**
10. **[Union Types](#10-union-types)**
11. **[Interface Types](#11-interface-types)**
12. **[Directives](#12-directives)**
13. **[Type Extensions](#13-type-extension)**
14. **[Relay Specification](#14-relay-specification)**
15. **[Schema Definition Language](#15-schema-definition-language---sdl)**
16. **[GraphQLSchema Object](#16-graphqlschema-object)**

### Server
17. **[Setting up a server](#17-setting-up-a-server)**
18. **[Schema](#18-schema)**
19. **[Resolvers](#19-resolvers)**
20. **[Context](#20-context)**
21. **[Info Object](#21-info-object)**
22. **[Databases](#22-databases)**
23. **[Dataloader](#23-dataloader)**
24. **[Entry Points](#24-entry-points)**
25. **[Schema Stitching](#25-schema-stitching)**
26. **[SDL First](#26-sdl-first)**
27. **[Code First](#27-code-first)**
28. **[Middleware](#28-middleware)**

### Client
29. **[Fetching](#29-fetching)**
30. **[Fragments](#30-fragments)** 
31. **[Variables](#31-variables)**
32. **[Alias](#32-alias)**
33. **[Polling](#33-polling)**
34. **[Cache](#34-cache)**

### Best Practices
35. **[Schema Design](#35-schema-design)**
36. **[Pagination](#36-pagination)**
37. **[Logging](#37-logging)** 

---
# Specs


## 1. Queries

### Articles

 * 📜 [Queries and Mutations - Graphql.org](https://graphql.org/learn/queries/)
 * 📜 [The Anatomy of a Graphql Query — Sashko Stubailo](https://blog.apollographql.com/the-anatomy-of-a-graphql-query-6dffa9e9e747)
 * 📜 [Front End Queries Made Easy - Rasheed Bustamam](https://medium.freecodecamp.org/graphql-front-end-queries-made-easy-68e9d9ded283)
 * 📜 [An Introduction to Graphql Queries - Alligator.io](https://alligator.io/graphql/introduction-graphql-queries/)
 * 📜 [Examples for GraphQL-Queries and Mutations - predict8](https://www.predic8.de/graphql-query-samples.htm)
 
 
 ### Videos

 * 🎥 [GraphQL Tutorial #4 - Making Queries - The Net Ninja](https://www.youtube.com/watch?v=bX2e4FILf78)
 * 🎥 [Writing GraphQL Queries - Live Coding with Jesse](https://www.youtube.com/watch?v=k-pj9d0cC-0)
 
**[⬆ Back to Top](#table-of-contents)**



## 2. Mutations

### Articles

 * 📜 [Mutations in GraphQL - Alexander Kondov](https://hackernoon.com/mutations-in-graphql-9ac6a28202a2)
 * 📜 [Mutations - GraphQL.org](https://graphql.org/learn/queries/#mutations)
 * 📜 [Organizing GraphQL Mutations - Jeff Lowery](https://medium.freecodecamp.org/organizing-graphql-mutations-653306699f3d)
 * 📜 [GraphQL mutations: Partial updates implementation - Arnaud Bezançon](https://medium.com/workflowgen/graphql-mutations-partial-updates-implementation-bff586bda989)
 * 📜 [Modeling GraphQL Mutations - Oleg Ilyenko](https://techblog.commercetools.com/modeling-graphql-mutations-52d4369f73b1)
 * 📜 [GraphQL Mutation Design: Anemic Mutations - Marc-André Giroux](https://medium.com/@__xuorig__/graphql-mutation-design-anemic-mutations-dd107ba70496)
 
 
 ### Videos

 * 🎥 [GraphQL Tutorial #18 - Mutations - The Net Ninja](https://www.youtube.com/watch?v=DU77lbBPfBI)
 * 🎥 [GraphQL Tutorial #19 - More on Mutations - The Net Ninja](https://www.youtube.com/watch?v=H8oRezNak2s)
 * 🎥 [Learn Apollo - Basic Mutations - Prisma](https://www.youtube.com/watch?v=ZXvBmA-hKwc)
 
**[⬆ Back to Top](#table-of-contents)**



## 3. Subscriptions

### Articles

 * 📜 [Subscriptions in Graphql and Relay - Dan Schafer](https://graphql.org/blog/subscriptions-in-graphql-and-relay/)
  * 📜 [From Zero to Graphql Subscriptions - Robert Zhu](https://hackernoon.com/from-zero-to-graphql-subscriptions-416b9e0284f3)
 * 📜 [Make web real-time with GraphQL subscriptions - David Qorashi](https://medium.com/@hpux/make-web-real-time-with-graphql-subscriptions-5a59ac1b010c)
 * 📜 [Realtime GraphQL Subscriptions - How to Graphql](https://www.howtographql.com/graphql-js/7-subscriptions/)
 * 📜 [A Guide to Subscriptions in GraphQL with Apollo -Brenda Jimenez](https://www.levvel.io/our-ideas/A-Guide-to-Subscriptions-in-GraphQL-with-Apollo)


 ### Videos

 * 🎥 [What is a Graphql Subscription - Ben Awad](https://www.youtube.com/watch?v=Tp8UPgmhyTs)
 * 🎥 [Introducing GraphQL Subscriptions - Lee Byron](https://www.youtube.com/watch?v=bn8qsi8jVew)
 * 🎥 [How to build a Realtime Chat with GraphQL Subscriptions and Apollo - Prisma](https://www.youtube.com/watch?v=aSLF9f13o2c)
 * 🎥 [How to setup GraphQL Subscriptions Nodejs - Ben Awad](https://www.youtube.com/watch?v=XmNmiBfk6M4)
 
**[⬆ Back to Top](#table-of-contents)**



## 4. Types

### Articles

 * 📜 [Constructing Types — Graphql.org](https://graphql.org/graphql-js/constructing-types/)
 * 📜 [Schema types - Apollo](https://www.apollographql.com/docs/apollo-server/schemas/types.html)
 * 📜 [Object Types — Graphql.org](https://graphql.org/graphql-js/object-types/)
 
 
  ### Videos
  * 🎥 [Author Types — The Net Ninja](https://www.youtube.com/watch?v=Pe1MgqWFyYE&t=2s)
  * 🎥 [Extending Schema Types - Full-stack GraphQL with Apollo, Meteor & React - LevelUpTuts](https://www.youtube.com/watch?v=A7NvopS75dI)

**[⬆ Back to Top](#table-of-contents)**



## 5. Fields

### Articles

 * 📜 [Fields — Graphql.org](https://graphql.org/learn/queries/#fields) 
 * 📜 [Object Types & Fields — Graphql.org](https://graphql.org/learn/schema/#object-types-and-fields)

**[⬆ Back to Top](#table-of-contents)**



## 6. Root Field

### Articles

 * 📜 [Root Fields & Resolvers - Graphql.org](https://graphql.org/learn/execution/)


 ### Videos

 * 🎥 [GraphQL Tutorial, Root Query — The Net Ninja](https://www.youtube.com/watch?v=ALqNbTik44o)

**[⬆ Back to Top](#table-of-contents)**



## 7. Relationships

### Articles
 
 * 📜 [Thinking in graphs - Graphql.Org](https://graphql.org/learn/thinking-in-graphs/)
 * 📜 [ A simple graphql example with relationships - Graphql Documentation](https://blog.tylerbuchea.com/a-simple-graphql-example-with-relationships/)


 ### Videos

 * 🎥 [Type Relations - The Net Ninja](https://www.youtube.com/watch?v=-aQ_Io9m1GQ) 

**[⬆ Back to Top](#table-of-contents)**



## 8. Introspection

### Articles

 * 📜 [GraphQL introspection and introspection queries - David Mráz](https://graphqlmastery.com/blog/graphql-introspection-and-introspection-queries)

**[⬆ Back to Top](#table-of-contents)**



## 9. Arguments

### Articles

 * 📜 [Fields and arguments - flaviocopes](https://flaviocopes.com/graphql/#fields-and-arguments)
 * 📜 [Passing Arguments - GraphQL.org](https://graphql.org/graphql-js/passing-arguments/)

**[⬆ Back to Top](#table-of-contents)**



## 10. Union Types

### Articles

 * 📜 [How to write add unions and interfaces to a schema - Apollo Documentation](https://www.apollographql.com/docs/apollo-server/features/unions-interfaces.html)
 * 📜 [Graphql Tour Interfaces and Unions — Clay Allsopp](https://medium.com/the-graphqlhub/graphql-tour-interfaces-and-unions-7dd5be35de0d)
 * 📜 [Graphql Interfaces and Unions-How to design a Graphql Schema — David Mraz](https://graphqlmastery.com/blog/graphql-interfaces-and-unions-how-to-design-graphql-schema)
 * 📜 [Interfaces and Unions in GraphQL — AWS Documentation](https://docs.aws.amazon.com/appsync/latest/devguide/interfaces-and-unions.html)

 **[⬆ Back to Top](#table-of-contents)**



## 11. Interface Types

### Articles

 * 📜 [Interface Type - Apollo Documentation](https://www.apollographql.com/docs/apollo-server/features/unions-interfaces.html#Interface-type)

**[⬆ Back to Top](#table-of-contents)**



## 12. Directives

### Articles

 * 📜 [GraphQL Directives - Abhi Aiyer](https://medium.com/open-graphql/graphql-directives-3dec6106c384)
 * 📜 [Use custom directives to protect your GraphQL APIs - David He](https://codeburst.io/use-custom-directives-to-protect-your-graphql-apis-a78cbbe17355)
 * 📜 [An introduction to GraphQL: Directives - Flavioscopes](https://flaviocopes.com/graphql/#graphql-directives)
 * 📜 [The Power of GraphQL Directives - Łukasz Czyszczonik](https://blog.callstack.io/the-power-of-graphql-directives-81f4987fd76d])
 * 📜 [Schema Directives - Apollo](https://www.apollographql.com/docs/graphql-tools/schema-directives.html)
 * 📜 [SDL Directives - GraphQLJava](https://www.graphql-java.com/documentation/v11/sdl-directives/)
 
 
 ### Videos

 * 🎥 [Directives in GraphQL - FullStackHour](https://www.youtube.com/watch?v=HUKKNL2socs)

**[⬆ Back to Top](#table-of-contents)**



## 13. Type Extension

### Articles

 * 📜 [Type Extension - Facebook](https://facebook.github.io/graphql/draft/#TypeExtension)
 * 📜 [Modularizing your GraphQL Schema Code: Extending types in multiple files - Apollo](https://blog.apollographql.com/d7f71d5ed5f2#14ac)
 * 📜 [Schema Extension - Facebook](https://facebook.github.io/graphql/June2018/#sec-Schema-Extension)
 * 📜 [The ultimate guide to schema stitching in GraphQL: Schema Extension - Rishichandra Wawhal](https://blog.hasura.io/the-ultimate-guide-to-schema-stitching-in-graphql-f30178ac0072/)

 ### Videos

 * 🎥 [Extending Schema Types: Full-stack GraphQL with Apollo, Meteor & React - LevelUpTuts](https://www.youtube.com/watch?v=A7NvopS75dI)

**[⬆ Back to Top](#table-of-contents)**


## 14. Relay Specification

### Articles

 * 📜 [GraphQL Server Specification - Facebook](https://facebook.github.io/relay/docs/en/graphql-server-specification.html)
 * 📜 [Implementing the Relay spec in a GraphQL Server - Marc-Andre Giroux](http://mgiroux.me/2016/implementing-the-relay-spec-for-a-graphql-server/)
 * 📜 [Relay/GraphqL: De-mystifying Node ID - Soon Hin Khor](https://medium.com/code-oil/relay-graphql-de-mystifying-node-id-38757121b9c)
 
**[⬆ Back to Top](#table-of-contents)**


## 15. Schema Definition Language - SDL

### Articles

 * 📜 [GraphQL SDL, Schema Definition Language - Prisma Documentation](https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce51)
 * 📜 [Three ways to represent your GraphQL schema - Sashko Stubailo](https://blog.apollographql.com/three-ways-to-represent-your-graphql-schema-a41f4175100d)
 * 📜 [A GraphQL SDL Reference - Alligator](https://alligator.io/graphql/graphql-sdl/)
 

**[⬆ Back to Top](#table-of-contents)**


## 16. GraphQLSchema object

### Articles

 * 📜 [GraphQL.js GraphQLSchema object - Sashko Stubailo](https://blog.apollographql.com/three-ways-to-represent-your-graphql-schema-a41f4175100d) 

**[⬆ Back to Top](#table-of-contents)**

---


# Server

## 17. Setting Up a Server

### Articles

 * 📜 [Building a server with Apollo - Apollo GraphQL](https://www.apollographql.com/docs/apollo-server/essentials/server.html)
 * 📜 [Your First GraphQL Server — Clay Allsopp](https://medium.com/the-graphqlhub/your-first-graphql-server-3c766ab4f0a2)
 * 📜 [Learn to build a GraphQL server with minimal effort — Ian Wilson](https://medium.freecodecamp.org/learn-to-build-a-graphql-server-with-minimal-effort-fc7fcabe8ebd)
 * 📜 [Building a GraphQL Server with Node.js — Angus Croll](https://itnext.io/building-a-graphql-server-with-node-js-and-express-f8ea78e831f9)


### Videos

 * 🎥 [Building a GraphQL Server [Part 1] — Traversy Media](https://www.youtube.com/watch?v=PEcJxkylcRM)
 * 🎥 [Building a GraphQL Server with TypeScript](https://www.youtube.com/watch?v=20zGexpEitc)
 * 🎥 [Learn how to build an API using GraphQL with Apollo Server 2.0 — Fireship](https://www.youtube.com/watch?v=8D9XnnjFGMs)
 * 🎥 [GraphQL server tutorial for Node.js with SQL, MongoDB and REST — Apollo GraphQL](https://www.youtube.com/watch?v=PHabPhgRUuU)

**[⬆ Back to Top](#table-of-contents)**



## 18. Schema

### Articles

 * 📜 [Understanding schema concepts - Apollo Documentation](https://www.apollographql.com/docs/apollo-server/essentials/schema.html)
 * 📜 [Graphql Server Basics: Schemas Explained - Prisma Documentation](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e)
 * 📜 [GraphQL Schema Language Cheat Sheet - Hafiz Ismail](https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6)
 * 📜 [GraphQL Server Basics: GraphQL Schemas, TypeDefs & Resolvers Explained - Prisma](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e)
 

 ### Videos

 * 🎥 [GraphQL Schema - The Net Ninja](https://www.youtube.com/watch?v=A8vtRvz-lK0)

**[⬆ Back to Top](#table-of-contents)**



## 19. Resolvers

### Articles

 * 📜 [GraphQL Resolvers: Best Practices - Mark Stuart](https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55)
 * 📜 [Overview of Resolvers - Graphcool Documentation](https://www.graph.cool/docs/reference/functions/resolvers-su6wu3yoo2)
 * 📜 [GraphQL Server Basics: GraphQL Schemas, TypeDefs & Resolvers Explained - Prisma](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e)
 * 📜 [GraphQL Resolvers: Best Practices - Mark Stuart](https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55)
 
 
 ### Videos

 * 🎥 [GraphQL Tutorial #9, The Resolve Function - The Net Ninja](https://www.youtube.com/watch?v=NWod5SFW13s)

**[⬆ Back to Top](#table-of-contents)**



## 20. Context

### Articles

 * 📜 [GraphQL Context and Services - Eric Clemmons](https://medium.com/@ericclemmons/graphql-context-services-6510269ef5a1)
 * 📜 [Learning about Execution and Context - GraphQL](https://graphql.org/learn/execution/)
 * 📜 [How does one set up database or other context in a graphql resolver - StackOverflow](https://stackoverflow.com/questions/44220597/how-does-one-set-up-database-or-other-context-in-a-graphql-resolver)
 
**[⬆ Back to Top](#table-of-contents)**



## 21. Info Object

### Articles

 * 📜 [GraphQL Server Basics: Demystifying the info Argument in GraphQL Resolvers](https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a/)
 
**[⬆ Back to Top](#table-of-contents)**



## 22. Databases

### Articles

 * 📜 [Selecting database as data source for GraphQL Server — Wojciech Trocki](https://medium.com/@wtr/selecting-database-as-data-source-for-graphql-server-e3281fcefb2)
 * 📜 [Connecting Server and Database with the Prisma Client — Prisma](https://www.howtographql.com/graphql-js/5-connecting-server-and-database/)
 * 📜 [Using a GraphQL API for Database Administration — Michael Hunger](https://medium.freecodecamp.org/using-a-graphql-api-for-database-administration-1a5039b43c8f)
 * 📜 [GraphQL as a database query language - Predrag Gruevski](https://blog.kensho.com/compiled-graphql-as-a-database-query-language-72e106844282)
 * 📜 [Use all the databases — Loren Sands-Ramshaw](https://www.compose.com/articles/use-all-the-databases-part-1/)
 * 📜 [GraphQL for databases: A layer for universal database access — George Anadiotis](https://www.zdnet.com/article/graphql-for-databases-a-layer-for-universal-database-access/)
 
 ### Videos

 * 🎥 [Build a GraphQL Server with Node.js and MongoDB - Ben Awad](https://www.youtube.com/watch?v=291i04TfGb0)
 * 🎥 [Build a GraphQL server for Node.js, using PostgreSQL/MySQL - Lee Benson](https://www.youtube.com/watch?v=DNPVqK_woRQ&t=3s)

**[⬆ Back to Top](#table-of-contents)**



## 23. Dataloader

### Articles

 * 📜 [Using dataloader with GraphQL: A Concrete Example — John Tucker](https://codeburst.io/using-dataloader-with-graphql-a-concrete-example-9b21352f1676)


### Videos

 * 🎥 [DataLoader – Source code walkthrough — Lee Byron](https://www.youtube.com/watch?v=OQTnXNCDywA&feature=youtu.be)
 * 🎥 [DataLoader and the Problem it solves in GraphQL — knowthen](https://www.youtube.com/watch?v=ld2_AS4l19g)

**[⬆ Back to Top](#table-of-contents)**



## 24. Entry Points

### Articles

 * 📜 [API Reference: entry points — GraphQL](https://graphql.org/graphql-js/graphql/#entry-point)
 * 📜 [Adding a GraphQL endpoint - Apollo Documentation](https://www.apollographql.com/docs/apollo-server/v1/setup.html)
 * 📜 [Running a scalable & reliable GraphQL endpoint with Serverless - Siddharth Gupta](https://serverless.com/blog/running-scalable-reliable-graphql-endpoint-with-serverless/)
 * 📜 [Serving over HTTP: Endpoints - Graphql.org](https://graphql.org/learn/serving-over-http/)

### Videos

 * 🎥 [ContentaJS GraphQL 3 - The GraphQL entry points — Mateu](https://www.youtube.com/watch?v=7eLsfIZYuvU)

**[⬆ Back to Top](#table-of-contents)**



## 25. Schema Stitching

### Articles

 * 📜 [The ultimate guide to Schema Stitching in GraphQL - Rishichandra Wawhal](https://blog.hasura.io/the-ultimate-guide-to-schema-stitching-in-graphql-f30178ac0072/)
 * 📜 [GraphQL Stitching 101 - Artsy](http://artsy.github.io/blog/2018/12/11/GraphQL-Stitching/)
 * 📜 [Schema Stitching - Apollo Documentation](https://www.apollographql.com/docs/graphql-tools/schema-stitching.html)
 * 📜 [GraphQL Remote Schema Stitching in a Multi-Service Architecture - Suciu Vlad](https://medium.com/provablyfair/graphql-remote-schema-stitching-in-a-multi-service-architecture-ac329037f082)

### Videos

 * 🎥 [API mashup: Combining APIs using GraphQL schema stitching - GitHub](https://www.youtube.com/watch?v=90JWZnuf7xQ)
 * 🎥 [GraphQL Schema Stitching - Ben Awad](https://www.youtube.com/watch?v=4i3W6g_u1Nw)
 * 🎥 [GraphQL Schema Stitching with Prisma and Contentful - Nikolas Burk(Contentful)](https://www.youtube.com/watch?v=w1loiyLD4eY)

**[⬆ Back to Top](#table-of-contents)**



## 26. SDL First

### Articles

 * 📜 [The Problems of "Schema-First" GraphQL Server Development - Prisma](https://www.prisma.io/blog/the-problems-of-schema-first-graphql-development-x1mn4cb0tyl3)

 ### Videos

 * 🎥 [Schema First Development - Prisma](https://www.youtube.com/watch?v=SdWI7XaAeeY)

**[⬆ Back to Top](#table-of-contents)**



## 27. Code First

### Articles

 * 📜 [Code-first - Hot Chocolate](https://hotchocolate.io/docs/code-first)
 * 📜 [Introducing GraphQL Nexus Code First GraphQL Server Development - Prisma](https://www.prisma.io/blog/introducing-graphql-nexus-code-first-graphql-server-development-ll6s1yy5cxl5/)
 * 📜 [The Problems of Schema-First GraphQL - Prisma](https://www.prisma.io/blog/the-problems-of-schema-first-graphql-development-x1mn4cb0tyl3)

**[⬆ Back to Top](#table-of-contents)**



## 28. Middleware

### Articles

 * 📜 [GraphQL Middleware - Prisma](https://www.prisma.io/blog/graphql-middleware-zie3iphithxy)
 * 📜 [Authentification and express middleware - Graphql.org](https://graphql.org/graphql-js/authentication-and-express-middleware/)
 

 ### Videos

 * 🎥 [GraphQL Middleware - Ben Awad](https://www.youtube.com/watch?v=0npsaFdrrFw)

**[⬆ Back to Top](#table-of-contents)**

---

# Client


## 29. Fetching

### Articles

 * 📜 [4 simple ways to call a GraphQL API - Sashko Stubailo](https://blog.apollographql.com/4-simple-ways-to-call-a-graphql-api-a6807bcdb355)


  ### Videos

 * 🎥 [Fetching data from an API in GraphQL - Ben Awad](https://www.youtube.com/watch?v=RDQyAcvmbpM)
 * 🎥 [Building a GraphQL Server, RootQuery & Fetching Data - Traversy Media](https://www.youtube.com/watch?v=e9Zxzr7sy60)
 
**[⬆ Back to Top](#table-of-contents)**



## 30. Fragments

### Articles

 * 📜 [Using fragments - Apollo](https://www.apollographql.com/docs/react/advanced/fragments.html)
 * 📜 [How to query your schema with GraphQL fragments - David Mráz](https://medium.com/graphql-mastery/graphql-fragments-and-how-to-use-them-8ee30b44f59e)
 * 📜 [GraphQL Fragments are the Best Match for UI Components - Samer Buna](https://www.manifold.co/blog/graphql-fragments-are-the-best-match-for-ui-components-72b8f61c20fe)


 ### Videos

 * 🎥 [How GraphQL Fragments Work - Ben Awad](https://www.youtube.com/watch?v=AAHR7eBKLU8)

**[⬆ Back to Top](#table-of-contents)**



## 31. Variables

### Articles

 * 📜 [GraphQL Tour: Variables - Clay Allsop](https://medium.com/the-graphqlhub/graphql-tour-variables-58c6abd10f56)
 * 📜 [Introduction to GraphQL: GraphQL Variables - Flavioscopes](https://flaviocopes.com/graphql/#graphql-variables)
 
 
 ### Videos

 * 🎥 [GraphQL Tutorial #32: Query variables - The Net Ninja](https://www.youtube.com/watch?v=Rvx1HLMK1-U)

**[⬆ Back to Top](#table-of-contents)**



## 32. Alias

### Articles

 * 📜 [An Introduction to GraphQL: Aliases - GraphQL Mastery](https://flaviocopes.com/graphql/#aliases)
 * 📜 [How to use GraphQL aliases - GraphQL Mastery](https://medium.com/graphql-mastery/graphql-quick-tip-aliases-567303a9ddc5)
 * 📜 [More GraphQL Concepts: Aliases - HowtoGraphQL](https://www.howtographql.com/advanced/2-more-graphql-concepts/)

**[⬆ Back to Top](#table-of-contents)**



## 33. Polling

### Articles

 * 📜 [Dynamic GraphQL polling with React and Apollo Client - David Glasser](https://blog.apollographql.com/dynamic-graphql-polling-with-react-and-apollo-client-fb36e390d250)
 
**[⬆ Back to Top](#table-of-contents)**



## 34. Cache

### Articles

 * 📜 [Understanding Caching - Weblab Technology](https://medium.com/p/58756ff253d8#9388)
 * 📜 [Caching with GraphQl: What are the best options? - Will Howard](https://blog.usejournal.com/caching-with-graphql-what-are-the-best-options-e161b0f20e59)
 * 📜 [GraphQL VS Rest: Caching - Phil Sturgeon](https://philsturgeon.uk/api/2017/01/26/graphql-vs-rest-caching/)
 * 📜 [Learn Caching - Graphql.org](https://graphql.org/learn/caching/)
 * 📜 [Overview: GraphQL Query Parsing and Caching at the Edge - Monika Rathor](https://developer.akamai.com/blog/2018/10/29/overview-graphql-query-parsing-and-caching-edge)


### Videos

* 🎥 [GraphQL Caching using DataLoader — Fun Fun Function](https://www.youtube.com/watch?v=--AguZ20lLA)
* 🎥 [Feature: GraphQL Caching with DataLoader — Ben Awad](https://www.youtube.com/watch?v=tSQ7WuAcAbU)

**[⬆ Back to Top](#table-of-contents)**

---

# Best Practices


## 35. Schema Design

### Articles

 * 📜 [GraphQL best practices for GraphQL schema design - David Mraz](https://graphqlmastery.com/blog/graphql-best-practices-for-graphql-schema-design)
 * 📜 [GraphQL Schema Design: Building Evolvable Schemas - Marc-André Giroux](https://blog.apollographql.com/graphql-schema-design-building-evolvable-schemas-1501f3c59ed5)
 * 📜 [Writing a Graphql Schema - Eitan Frailich](https://github.com/davidyaha/graphql-workshop/blob/master/manuals/step-2-writing-a-schema.md)
 * 📜 [Abstract Demand Oriented Schema - Apollo](https://principledgraphql.com/agility#4-abstract-demand-oriented-schema)  
 
 
 ### Videos

* 🎥 [GraphQL Schema Design — Marc-André Giroux](https://www.youtube.com/watch?v=pJamhW2xPYw)

**[⬆ Back to Top](#table-of-contents)**



## 36. Pagination

### Articles

 * 📜 [Pagination](https://graphql.org/learn/pagination/) 

**[⬆ Back to Top](#table-of-contents)**



## 37. Logging

### Articles

 * 📜 [GraphQL Log - withSpectrum](https://github.com/withspectrum/graphql-log)
 * 📜 [Structured Logging - Apollo](https://principledgraphql.com/operations#9-structured-logging)
 

**[⬆ Back to Top](#table-of-contents)**



## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/32113193?v=4" width="100px;" alt="Kelsey Yim"/><br /><sub><b>Kelsey Yim</b></sub>](https://github.com/kelseyyim)<br />[🚧](#maintenance-kelseyyim "Maintenance") | [<img src="https://avatars1.githubusercontent.com/u/16107563?v=4" width="100px;" alt="Rohit Ravikoti"/><br /><sub><b>Rohit Ravikoti</b></sub>](https://novvum.io)<br />[🚧](#maintenance-rohit-ravikoti "Maintenance") | [<img src="https://avatars2.githubusercontent.com/u/11083917?v=4" width="100px;" alt="Alli Colyer"/><br /><sub><b>Alli Colyer</b></sub>](http://www.alli.science)<br />[🖋](#content-Allicolyer "Content") | [<img src="https://avatars2.githubusercontent.com/u/15880596?v=4" width="100px;" alt="Raj K Singh"/><br /><sub><b>Raj K Singh</b></sub>](https://www.novvum.io)<br />[🖋](#content-rajinwonderland "Content") | [<img src="https://avatars3.githubusercontent.com/u/30252118?v=4" width="100px;" alt="Jorge Carlos"/><br /><sub><b>Jorge Carlos</b></sub>](https://github.com/Jorge0521)<br />[🖋](#content-Jorge0521 "Content") | [<img src="https://avatars2.githubusercontent.com/u/31262171?v=4" width="100px;" alt="Henry Yang"/><br /><sub><b>Henry Yang</b></sub>](https://github.com/hkyang995)<br />[🖋](#content-hkyang995 "Content") | [<img src="https://avatars3.githubusercontent.com/u/23729837?v=4" width="100px;" alt="TrevHeath"/><br /><sub><b>TrevHeath</b></sub>](https://github.com/TrevHeath)<br />[🖋](#content-TrevHeath "Content") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
