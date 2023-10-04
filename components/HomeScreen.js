import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-web";

export default function HomeScreen({ navigation, route }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      idUser: "",
      fullName: "",
      email: "",
      password: "",
      uri: "",
      age: "",
    },
  });
  const onSubmit = (data) => console.log(data)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bienvenid@ {route.params.email}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 4
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="identificacion"
            onBlur={onBlur}
            onChangeText={onChange}
            //value={value}
          />
        )}
        name="idUser"
      />
      {errors.idUser?.type == "required" && <Text style={{color: " red"}}>This is required.</Text>}
      {errors.idUser?.type == "maxLength" && <Text style={{color: " red"}}>longitud maxima es de 12 caracteres.</Text>}
      {errors.idUser?.type == "minLength" && <Text style={{color: " red"}}>la longitud minima es de 4 caracteres.</Text>}

      <Button
        style={{ marginTop: 20, backgroundColor: "powder" }}
        icon="content-save"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Guardar
      </Button>

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
}
