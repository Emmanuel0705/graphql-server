const graphql = require('graphql');
const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
} = graphql;

const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLString },
        email: { type: GraphQLString },
    }),
});

const RootQuary = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: userType,
            args: { id: { type: GraphQLString } },
            resolve(root, args) {
                return axios
                    .get(
                        `https://jsonplaceholder.typicode.com/users/${args.id}`
                    )
                    .then((res) => {
                        return res.data;
                    });
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuary,
});
