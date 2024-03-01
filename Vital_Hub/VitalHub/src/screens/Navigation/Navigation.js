// Import das tags nativas do react-native
import { Button, View } from "react-native";

// Componente Navigation que esta sendo exportado
export const Navigation = ({ navigation }) => {
    return(
    <>
        <Button 
        title="Login"
        onPress={() => navigation.navigate("Login")}/>

        <Button 
        title="Profile"
        onPress={() => navigation.navigate("Profile")}/>
    
        <Button 
        title="MedicalRecord"
        onPress={() => navigation.navigate("MedicalRecord")}/>
    
        <Button 
        title="Home"
        onPress={() => navigation.navigate("Home")}/>

        <Button 
        title="SelectClinic"
        onPress={() => navigation.navigate("SelectClinic")}/>

        <Button 
        title="SelectDoctor"
        onPress={() => navigation.navigate("SelectDoctor")}/>

        <Button 
        title="SelectDate"
        onPress={() => navigation.navigate("SelectDate")}/>
         
    </>
    );
} 
