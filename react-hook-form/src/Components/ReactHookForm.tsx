import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function ReactHoookForm() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  const onsubmit = () => {
    alert("Form have been submited");
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <FormControl>
        <FormLabel htmlFor="name">UserName</FormLabel>
        <Input id="name" placeholder="Enter Name" {...register("name")} />
        <FormLabel htmlFor="Enter name">Email </FormLabel>
        <Input
          id="name"
          type="email"
          placeholder="Enter Email"
          {...register("email")}
        />
        <FormLabel htmlFor="name">PhoneNumber</FormLabel>
        <Input
          id="name"
          type="number"
          placeholder="Enter PhoneNumber"
          {...register("number")}
        />
        <FormLabel htmlFor="name">Password</FormLabel>
        <Input
          id="name"
          type="password"
          placeholder="Enter Password"
          {...register("password")}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default ReactHoookForm;
