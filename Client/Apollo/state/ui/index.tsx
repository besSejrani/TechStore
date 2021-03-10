import {makeVar, gql} from "@apollo/client";

export const GET_UI = gql`
  query getUI {
    isAdmin     @client
    isUser      @client
    sidebarOpen @client
    cartOpen    @client
  }
`;


export type UI = {
    isAdmin: boolean,
    isUser: boolean,
    sidebarOpen: boolean,
    cartOpen: boolean
};



const initialState = {
    isAdmin: true,
    isUser: false,
    sidebarOpen: false,
    cartOpen: false
};

export const getUI = makeVar<UI>(initialState);



