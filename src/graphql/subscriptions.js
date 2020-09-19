/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const onCreateFollowRelationship = /* GraphQL */ `
  subscription OnCreateFollowRelationship($followerId: String!) {
    onCreateFollowRelationship(followerId: $followerId) {
      followeeId
      followerId
      timestamp
    }
  }
`;
export const onUpdateFollowRelationship = /* GraphQL */ `
  subscription OnUpdateFollowRelationship {
    onUpdateFollowRelationship {
      followeeId
      followerId
      timestamp
    }
  }
`;
export const onDeleteFollowRelationship = /* GraphQL */ `
  subscription OnDeleteFollowRelationship {
    onDeleteFollowRelationship {
      followeeId
      followerId
      timestamp
    }
  }
`;
export const onUpdateTimeline = /* GraphQL */ `
  subscription OnUpdateTimeline {
    onUpdateTimeline {
      userId
      timestamp
      postId
      post {
        type
        id
        content
        owner
        timestamp
      }
    }
  }
`;
export const onDeleteTimeline = /* GraphQL */ `
  subscription OnDeleteTimeline {
    onDeleteTimeline {
      userId
      timestamp
      postId
      post {
        type
        id
        content
        owner
        timestamp
      }
    }
  }
`;
export const onCreateTimeline = /* GraphQL */ `
  subscription OnCreateTimeline($userId: String!) {
    onCreateTimeline(userId: $userId) {
      userId
      timestamp
      postId
      post {
        type
        id
        content
        owner
        timestamp
      }
    }
  }
`;
