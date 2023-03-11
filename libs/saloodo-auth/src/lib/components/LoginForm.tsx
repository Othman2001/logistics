import { Input, Spacer, Button, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null);
  const { isLoading } = useLogin({ email, password });
  return (
    <>
      <Input clearable bordered labelPlaceholder="Name" initialValue="NextUI" />
      <Spacer y={2.5} />
      <Input
        value={email as string}
        clearable
        required
        type="email"
        onChange={(e) => { setEmail(e.target.value) }}
        underlined
        labelPlaceholder="example@gmail.com"
      />
      <Spacer y={1.5} />
      <Input clearable label="password" placeholder="****" type="password" value={password as string} onChange={(e) => { setPassword(e.target.value) }} />
      <Button icon={
        <>
          {isLoading ? (<Spinner />) : (null)}
        </>
      }>
        Log In
      </Button>
    </>
  )
}
