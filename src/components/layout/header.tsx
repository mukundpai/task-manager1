import { Layout, Space } from "antd"
import CurrentUser from "./current-user"

const Header = () => {

    const headerStyles: React.CSSProperties = {
        background: '#fff',
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: "sticky",
        top: 0

    }
  return (
    <Layout.Header style={headerStyles}>
        <Space align= "center" size="middle">
            <CurrentUser /> 
        </Space>
    </Layout.Header>
  )
}

export default Header