import { notFound } from 'next/navigation'
import Projects from '@/components/website/pages/projects/Projects'
import { projectsData } from '@/data/projects'
import { ProjectCardType } from '@/components/website/types/projectCardType'

type Category = ProjectCardType['category']

type PageProps = {
  params: Promise<{
    platter: string
  }>
}

const allowedCategories: readonly Category[] = [
  'residential',
  'commercial',
  'industrial',
]

const Page = async ({ params }: PageProps) => {
  const { platter } = await params   // 🔥 THIS WAS MISSING

  const normalizedPlatter = platter.toLowerCase() as Category

  if (!allowedCategories.includes(normalizedPlatter)) {
    notFound()
  }

  // const filteredData: ProjectCardType[] = projectsData.filter(
  //   item => item.category.toLowerCase() === normalizedPlatter
  // )
   const filteredData: ProjectCardType[] = projectsData
    .filter(item => item.category.toLowerCase() === normalizedPlatter)
    .map(item => ({
      ...item,
      category: item.category.toLowerCase() as Category,
    }))

  return <Projects data={filteredData} />
}

export default Page
