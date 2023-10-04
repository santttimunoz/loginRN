import {useState, UseEffect} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Avatar, Button} from 'react-native-paper';
import {styles} from '../assets/styles/allstyles';
// Firebase
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const [showPass, setShowPass] = useState(false)
    // definir constantes para la autenticación
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    // Métodos para crear cuenta en Firebase Authentication y SignIn
    const handleCreateAccount = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            //console.log(userCredential.user.providerData)
            setMessage("Cuenta creada correctamente ...")
        })
        .catch((error)=>{
            ///console.log(error.message)
            setMessage("Error al crear la cuenta... Inténtelo de nuevo")
        })
    }

    const handleSignIn = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log("Conexión exitosa ...");
            navigation.navigate('Home',{email:email})
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    return(
        <View style={styles.container}>
            <Avatar.Image
                style={{ marginBottom: 20 }}
                size={100}
                source={require('../assets/imgs/imglogin.png')} />
            <View style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 50 }}>
                <TextInput
                    autoFocus
                    label="Correo Electrónico"
                    left={<TextInput.Icon icon="email" />}
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
                <TextInput
                    style={{ marginTop: 20 }}
                    label="Contraseña"
                    secureTextEntry={!showPass}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                    right={<TextInput.Icon icon={showPass ? "eye" : "eye-off"} onPress={()=>setShowPass(!showPass)} />}
                />
                <Button
                    style={{ marginTop: 20, backgroundColor: 'orange' }}
                    icon="login"
                    mode="outlined"
                    onPress={handleSignIn}
                >
                    Iniciar Sesión
                </Button>
                <Button
                    style={{ marginTop: 20, backgroundColor: 'yellow' }}
                    icon="account"
                    mode="outlined"
                    onPress={handleCreateAccount}
                >
                    Crear Cuenta
                </Button>
                <Text style={{color:'green'}}>{message}</Text>
            </View>
        </View>
    );
}