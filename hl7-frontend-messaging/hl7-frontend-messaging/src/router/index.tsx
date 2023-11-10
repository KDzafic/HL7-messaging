import React from 'react';
import { Route, Routes} from 'react-router-dom';
import DashboardScreen from "../Screens/DashboardScreen";
import PublicLayout from "../layouts/PublicLayout";
import SignInScreen from "../Screens/SignInScreen";
import ProtectedLayout from "../layouts/ProtectedLayout";
import ProfileScreen from "../Screens/ProfileScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import HL7Screen from "../Screens/HL7Screen";
import TriggerScreen from "../Screens/TriggerScreen";
import TriggerDefinitionScreen from "../Screens/TriggerDefinitionScreen";
import DataTypeScreen from "../Screens/DataTypeScreens";
import DataTypeDefinitionScreen from "../Screens/DataTypeDefinitionScreen";
import TableScreen from "../Screens/TableScreen";
import TableDefinitionScreen from "../Screens/TableDefinitionScreen";
import SegmentScreen from "../Screens/SegmentScreen";
import SegmentDefinitionScreen from "../Screens/SegmentDefinitionScreen";
import SentScreen from "../Screens/SentScreen";
import FavouriteScreen from "../Screens/FavouriteScreens";
import DeleteScreen from "../Screens/DeleteScreen";
import SpamScreen from "../Screens/SpamScreen";
import MessageScreen from "../Screens/MessageScreen";


const AppRouter: React.FC = () => {
    return (
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<SignInScreen />} />
                    <Route path="/sign-in" element={<SignInScreen />} />
                </Route>
                <Route element={<ProtectedLayout />}>
                    <Route path="/home" element={<DashboardScreen />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/settings" element={<SettingsScreen />} />
                    <Route path="/hl7-definition" element={<HL7Screen />} />
                    <Route path="/trigger" element={<TriggerScreen />} />
                    <Route path="/trigger/definition" element={<TriggerDefinitionScreen />} />
                    <Route path="/data-type" element={<DataTypeScreen />} />
                    <Route path="/data-type/definition" element={<DataTypeDefinitionScreen />} />
                    <Route path="/table" element={<TableScreen />} />
                    <Route path="/table/definition" element={<TableDefinitionScreen />} />
                    <Route path="/segment" element={<SegmentScreen />} />
                    <Route path="/segment/definition" element={<SegmentDefinitionScreen />} />
                    <Route path="/sent" element={<SentScreen />} />
                    <Route path="/favourite" element={<FavouriteScreen />} />
                    <Route path="/delete" element={<DeleteScreen />} />
                    <Route path="/spam" element={<SpamScreen />} />
                    <Route path="/message/:messageId" element={<MessageScreen />} />
                </Route>
            </Routes>
    );
};

export default AppRouter;