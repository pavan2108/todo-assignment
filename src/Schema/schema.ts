import { GraphQLID, GraphQLList, GraphQLSchema, GraphQLString } from 'graphql';

import {GraphQLObjectType} from "graphql"
import Clients from '../Models/Clients';
import Projects from '../Models/Projects';

const clientSchema = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
    })
})

const projectsSchema = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: {type: GraphQLID},
        client: {
            type: clientSchema,
            resolve(parent, args)
            {
                return Clients.findById(parent.clientId)
            }
        },
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: clientSchema,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Clients.findById(args.id);
            }
        },
        clients: {
            type: new GraphQLList(clientSchema),
            resolve(parent, args) {
                return Clients.find();
            }
        },
        projects: {
            type: new GraphQLList(projectsSchema),
            resolve(parent, args) {
                return Projects.find()
            }
        },
        project: {
            type: projectsSchema,
            args: {id : {type: GraphQLID}},
            resolve(parent, args)
            {
                return Projects.findById(args.id)
            }
        }
    }
})



const root = new GraphQLSchema({
    query: RootQuery
});

export {
    root
}

