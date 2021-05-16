/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFolder = /* GraphQL */ `
  mutation CreateFolder(
    $input: CreateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    createFolder(input: $input, condition: $condition) {
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
export const updateFolder = /* GraphQL */ `
  mutation UpdateFolder(
    $input: UpdateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    updateFolder(input: $input, condition: $condition) {
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
export const deleteFolder = /* GraphQL */ `
  mutation DeleteFolder(
    $input: DeleteFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    deleteFolder(input: $input, condition: $condition) {
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
export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $input: CreateSetInput!
    $condition: ModelSetConditionInput
  ) {
    createSet(input: $input, condition: $condition) {
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
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
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
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $input: DeleteSetInput!
    $condition: ModelSetConditionInput
  ) {
    deleteSet(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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
