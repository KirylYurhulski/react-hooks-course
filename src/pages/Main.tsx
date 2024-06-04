import { Container, Tabs, Tab } from 'react-bootstrap'
import { UseStateHook } from '../components/hooks/UseStateHook'
import { UseEffectHook } from '../components/hooks/UseEffectHook/UseEffectHook'
import { UseRefHook } from '../components/hooks/UseRefHook'
import { UseMemoHook } from '../components/hooks/UseMemoHook'
import { UseCallbackHook } from '../components/hooks/UseCallbackHook/UseCallbackHook'
import { UseContextHook } from '../components/hooks/UseContextHook/UseContextHook'

export const Main = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="useState" id="hooks-tab-example" className="mb-3">
        <Tab eventKey="useState" title="Use State">
          <UseStateHook />
        </Tab>
        <Tab eventKey="useEffect" title="Use Effect">
          <UseEffectHook />
        </Tab>
        <Tab eventKey="useRef" title="Use Ref">
          <UseRefHook />
        </Tab>
        <Tab eventKey="useMemo" title="Use Memo">
          <UseMemoHook />
        </Tab>
        <Tab eventKey="useCallback" title="Use Callback">
          <UseCallbackHook />
        </Tab>
        <Tab eventKey="useContext" title="Use Context">
          <UseContextHook />
        </Tab>
      </Tabs>
    </Container>
  )
}
