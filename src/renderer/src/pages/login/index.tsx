import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Heading, TextInput, Button, Text } from '@cognu-ui/react'
import toast from 'react-hot-toast'

import { Container, Header, Form, Cover, FormError } from './styles'

const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário deve ter mais de 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hífen.'
    })
    .transform((username) => username.toLowerCase()),
  password: z.string().trim().min(6, { message: 'A senha deve conter no mínimo 6 caracteres' })
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  })

  const navigate = useNavigate()

  async function handleLogin({ username, password }: LoginFormSchema) {
    try {
      console.log(username, password)
      navigate('/welcome')
    } catch (error: any) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message, {
          style: {
            font: "normal 1rem 'Roboto', Segoe-ui, sans-serif"
          }
        })
        return
      }

      console.error(error)
    }
  }

  return (
    <Container>
      <Cover>
        <Header>
          <Heading as="strong">Excerpt</Heading>
          <div className="separat">
            <Text>insere os seus dados</Text>
          </div>
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleLogin)}>
          <label>
            <Text>Nome de usuário</Text>
            <TextInput prefix="ignite.com/" {...register('username')} />

            {errors.username && <FormError size="xs">{errors.username.message}</FormError>}
          </label>

          <label>
            <Text>Senha de acesso</Text>
            <div className="input-group">
              <TextInput type="password" placeholder="****" {...register('password')} />
            </div>

            {errors.password && <FormError size="xs">{errors.password.message}</FormError>}
          </label>

          <Button type="submit" disabled={isSubmitting}>
            <Text>Entrar</Text>
          </Button>
        </Form>
      </Cover>
    </Container>
  )
}
