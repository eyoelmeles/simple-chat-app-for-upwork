import { appApi } from "../../../store/app.api";
import { appEndpoint } from "../../../store/app.endpoint";

const chatQueryApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query({
      query: (data) => ({
        url: appEndpoint.group,
        method: "get",
        // params: data?.params,
      }),
      providesTags: ["groups"],
    }),
    createMessage: build.mutation({
      query: (data) => ({
        url: appEndpoint.message,
        method: "patch",
        data: data?.body,
        // params: data?.params,
      }),
      invalidatesTags: (result) => (result ? ["groups"] : []),
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: appEndpoint.user,
        method: "post",
        data: data?.body,
        // params: data?.params,
      }),
      invalidatesTags: (result) => (result ? ["users"] : []),
    }),
    createGroup: build.mutation({
      // query: (data) => ({
      //   url: appEndpoint.group,
      //   method: "patch",
      //   data: data?.body,
      //   query: data?.params.query,
      //   // params: data?.params,
      // }),
      query: ({ id, ...patch }) => ({
        url: `${appEndpoint.group}/${id}`,
        method: "PATCH",
        data: patch,
      }),
      invalidatesTags: (result) => (result ? ["groups"] : []),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMessagesQuery,
  useGetUsersQuery,
  useGetGroupsQuery,
  useCreateMessageMutation,
  useCreateUserMutation,
  useCreateGroupMutation,
} = chatQueryApi;
