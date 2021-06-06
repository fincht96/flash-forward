/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      bio
      location
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      bio
      location
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      bio
      location
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
export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder {
    onCreateFolder {
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
        location
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
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder {
    onUpdateFolder {
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
        location
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
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder {
    onDeleteFolder {
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
        location
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet {
    onCreateSet {
      id
      name
      description
      folderID
      userID
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
          location
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet {
    onUpdateSet {
      id
      name
      description
      folderID
      userID
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
          location
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet {
    onDeleteSet {
      id
      name
      description
      folderID
      userID
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
          location
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
      id
      setID
      set {
        id
        name
        description
        folderID
        userID
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
      id
      setID
      set {
        id
        name
        description
        folderID
        userID
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
      id
      setID
      set {
        id
        name
        description
        folderID
        userID
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
