const graphql = require('graphql');

const { fetchData } = require('./firebase.util');

const Shcema = graphql.buildSchema(`
type SearchResultType {
  distance: Int,
  userId:String,
  name:String,
  formattedAddress:[String]

}
type Query {
  SearchResult(type:String,userId:String): [SearchResultType]
}
`);

const rootResolver = {
    SearchResult: async (args) => {
        console.log(args.type);
        return await fetchData(args.type, args.userId);
    },
};

module.exports = {
    schema: Shcema,
    resolver: rootResolver,
};
