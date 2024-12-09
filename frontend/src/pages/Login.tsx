import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { LoginFormSchema } from "@/types";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { z } from "zod";

type LoginFormType = z.infer<typeof LoginFormSchema>;

const Login = () => {
  const { toast } = useToast();
  const [inputValue, setInputValue] = useState<LoginFormType>({
    username: "",
    password: "",
  });

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    const parsedData = LoginFormSchema.safeParse(inputValue);
    if (!parsedData.success) {
      toast({
        title : "Error",
        description : parsedData.error.issues[0].message
      })
      return;
    }
    console.log(parsedData);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="sm:h-[350px] w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Good to see you back</CardDescription>
        </CardHeader>
        <CardContent className="p-4 mb-2">
          <form>
            <div className="flex flex-col gap-1 mb-2">
              <label htmlFor="username" className="text-zinc-500">
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="John Doe"
                value={inputValue.username}
                onChange={changeHandler}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-zinc-500">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="johndoe#123"
                value={inputValue.password}
                onChange={changeHandler}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex gap-3 w-full">
            <Button onClick={submitHandler}>Submit</Button>
            <Button>Cancel</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
