import { Navbar as UiNavbar, Button, Link, Image } from "@nextui-org/react";

export default function Navbar() {
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];
  return (
    <UiNavbar isBordered variant="sticky">
      <UiNavbar.Brand >
        <UiNavbar.Toggle hideIn="lg" aria-label="toggle navigation" />
        <Image width={90} height={90} src="https://www.saloodo.com/wp-content/uploads/2021/05/logo-saloodo-dark.svg" />
      </UiNavbar.Brand>
      {/* <UiNavbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <UiNavbar.Link href="#">Features</UiNavbar.Link>
        <UiNavbar.Link href="#">Customers</UiNavbar.Link>
        <UiNavbar.Link href="#">Pricing</UiNavbar.Link>
        <UiNavbar.Link href="#">Company</UiNavbar.Link>
      </UiNavbar.Content> */}
      <UiNavbar.Content>
        <UiNavbar.Link color="inherit" href="#">
          Login
        </UiNavbar.Link>
        <UiNavbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </UiNavbar.Item>
      </UiNavbar.Content>
      <UiNavbar.Collapse>
        {collapseItems.map((item, index) => (
          <UiNavbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </UiNavbar.CollapseItem>
        ))}
      </UiNavbar.Collapse>
    </UiNavbar>
  )
}
