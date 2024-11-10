// src/app/blog/[id]/page.tsx

const blogDetails = {
    1: { title: 'Elton John', content: 'Elton has been sober for over thirty years and attributes much of his success to his recovery journey. He has also used his experience to support others, founding the Elton John AIDS Foundation and working to raise awareness about addiction and mental health.' },
    2: { title: 'The Science of Addiction', content: ' Scientists estimate that genetic factors account for between 40 and 60 percent of a persons vulnerability to addiction.this includes the effects of environmental factors on the function and expression of a person genes. A persons stage of development and other medical conditions they may have are also factors.consistent drug use severely limits a person’s capacity to feel pleasure at all. That’s because, over time, drug use leads to much smaller releases of dopamine.  ' },
    3: { title: 'Prevention', content: 'As adults we very much want to impart as much wisdom as we can to help young people avoid the same mistakes that we made. But, it is probably more useful to draw out their innate curiosity and encourage them to seek out answers on their own. Consider beginning by asking a question like, "Tell me, what do you know about marijuana?" Teens who feel like their point of view is valued may be more willing to engage in a conversation. In response to what your child says, use nonjudgmental reflective statements to make sure she feels listened to, then follow up with a question. ' },
    4: { title: 'Role of mental health', content: 'Mental health is key to getting better from addiction. Its not just about stopping the addiction. Its also about keeping your mind healthy for a lasting recovery. At Oasis Treatment Centers, they know that mental health is vital for recovery' },
    5: { title: 'Community Support', content: 'Community can help you to stay on track. Many people with addiction have underdeveloped social skills. They often have to learn how to create strong relationships in healthy ways. By having a community of support, you gain guidance and experience with building relationships in a safe environment.' },
    6: { title: 'Myths and Facts', content: ' Addiction is a chronic disease. While the initial decision to use drugs might be voluntary, repeated use can alter the brain, making it harder to control impulses and stop using. Addiction affects areas of the brain related to reward, motivation, and memory.Quitting drugs is not just about willpower. Addiction changes brain chemistry, making it extremely difficult to stop without professional help and support. Many people need medical treatment, therapy, and long-term care to recover.Addiction impacts not just the person using drugs but their family, friends, and community. It can strain relationships, lead to financial problems, and affect public health and safety. Families often need support to cope with a loved one’s addiction.' },
  };
  
  export default function BlogDetails({ params }: { params: { id: string } }) {
    const { id } = params;
    
    
    const blog = blogDetails[id as unknown as keyof typeof blogDetails];
  
    if (!blog) return <p>Blog not found</p>;
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-yellow-500 bg-slate-800 p-4 font-bold mb-4">{blog.title}</h1>
        <p className="text-white bg-slate-800 p-4">{blog.content}</p>
      </div>
    );
  }
  