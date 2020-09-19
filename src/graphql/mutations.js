/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPostAndTimeline = /* GraphQL */ `
  mutation CreatePostAndTimeline($content: String!) {
    createPostAndTimeline(content: $content) {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const createFollowRelationship = /* GraphQL */ `
  mutation CreateFollowRelationship(
    $input: CreateFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    createFollowRelationship(input: $input, condition: $condition) {
      followeeId
      followerId
      timestamp
    }
  }
`;
export const updateFollowRelationship = /* GraphQL */ `
  mutation UpdateFollowRelationship(
    $input: UpdateFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    updateFollowRelationship(input: $input, condition: $condition) {
      followeeId
      followerId
      timestamp
    }
  }
`;
export const deleteFollowRelationship = /* GraphQL */ `
  mutation DeleteFollowRelationship(
    $input: DeleteFollowRelationshipInput!
    $condition: ModelFollowRelationshipConditionInput
  ) {
    deleteFollowRelationship(input: $input, condition: $condition) {
      followeeId
      followerId
      timestamp
    }
  }
`;
export const updateTimeline = /* GraphQL */ `
  mutation UpdateTimeline(
    $input: UpdateTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    updateTimeline(input: $input, condition: $condition) {
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
export const deleteTimeline = /* GraphQL */ `
  mutation DeleteTimeline(
    $input: DeleteTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    deleteTimeline(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const createTimeline = /* GraphQL */ `
  mutation CreateTimeline(
    $input: CreateTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    createTimeline(input: $input, condition: $condition) {
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
