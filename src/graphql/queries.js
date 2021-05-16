/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      bio
      Location
      username
      folders {
        items {
          id
          name
          description
          tags
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        bio
        Location
        username
        folders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFolder = /* GraphQL */ `
  query GetFolder($id: ID!) {
    getFolder(id: $id) {
      id
      name
      description
      tags
      userID
      user {
        id
        firstName
        lastName
        bio
        Location
        username
        folders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      sets {
        items {
          id
          name
          description
          folderID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFolders = /* GraphQL */ `
  query ListFolders(
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        tags
        userID
        user {
          id
          firstName
          lastName
          bio
          Location
          username
          createdAt
          updatedAt
          owner
        }
        sets {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
      id
      name
      description
      folderID
      folder {
        id
        name
        description
        tags
        userID
        user {
          id
          firstName
          lastName
          bio
          Location
          username
          createdAt
          updatedAt
          owner
        }
        sets {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      cards {
        items {
          id
          setID
          question
          answer
          flagged
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        folderID
        folder {
          id
          name
          description
          tags
          userID
          createdAt
          updatedAt
          owner
        }
        cards {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
      id
      setID
      set {
        id
        name
        description
        folderID
        folder {
          id
          name
          description
          tags
          userID
          createdAt
          updatedAt
          owner
        }
        cards {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      question
      answer
      flagged
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        setID
        set {
          id
          name
          description
          folderID
          createdAt
          updatedAt
          owner
        }
        question
        answer
        flagged
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
