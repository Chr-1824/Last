import { Admin, CustomRoutes,ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "/workspaces/Last/my-admin/ra-trailbase (1).js";
import { CreateUser, LoginPage } from "/workspaces/Last/my-admin/src/admin/create_user.jsx";

const TRAILBASE_URL = "https://glorious-funicular-9676vwxg74v3pg57-4000.app.github.dev";
const { dataProvider, authProvider } = await createTrailbaseProvider(
  TRAILBASE_URL,
);

const App = () => (
    <Admin
      loginPage={LoginPage}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <CustomRoutes noLayout>
        <Route path="/create-user" element={<CreateUser />} />
      </CustomRoutes>
      <Resource name = "Account" List = {ListGuesser} />
    </Admin>
  );




export default App;