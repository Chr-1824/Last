import { Admin, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "/workspaces/Last/my-admin/ra-trailbase (1).js";
import { CreateUser, LoginPage } from "./create_user";

const TRAILBASE_URL = "http://localhost:4000";
const { dataProvider, authProvider } = await createTrailbaseProvider(
  TRAILBASE_URL,
);

export const App = () => (
    <Admin dataProvider={dataProvider}>

    </Admin>
);



export default App;