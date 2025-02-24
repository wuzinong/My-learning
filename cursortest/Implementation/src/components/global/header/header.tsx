import shallow from 'zustand/shallow'

import { useGlobalStore } from 'stores/global'

export default function Header() {
  const { isSignIn } = useGlobalStore(state => ({ isSignIn: state.isSignIn }), shallow)

  return <>{isSignIn ? <header>Sing header</header> : <header>Anonymous header</header>}</>
}
