import { architectureContent } from '@/lib/architecture-content'

export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: architectureContent }} />
  )
}
