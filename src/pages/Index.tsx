import { useState } from 'react';
import {
  Mail,
  Phone,
  ExternalLink,
  Github,
  ArrowDown,
  Code,
  Database,
  Users,
  Star,
  Sparkles,
  Globe,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import ProfilePhoto from '../assests/profilePhoto.jpg';
import PoliceImage from '../assests/police.jpg';
import PostOffice from '../assests/PostOffice.jpg';
import Agri from '../assests/Agri.jpg';
import Dambulla from '../assests/dambulla.jpg';
import Gym from '../assests/Gym.jpg';
import emailjs from 'emailjs-com';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_q99jllu',
        'template_7vwugra',
        formData,
        'x6qXgj-7-BXf0ae-p'
      )
      .then(() => {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to send email');
      });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Python', 'Java', 'C++', 'R'],
    },
    {
      category: 'Web Development',
      items: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js'],
    },
    { category: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Postman'] },
    { category: 'Cloud & DevOps', items: ['AWS (Basics)', 'CI/CD Pipelines'] },
    {
      category: 'Other',
      items: [
        'Agile Methodologies',
        'Problem-Solving',
        'Debugging',
        'Graphic Designing',
      ],
    },
  ];

  const projects = [
    {
      title: 'Digitalization of Sri Lankan Postal Service',
      description:
        'Online system for parcel tracking, registration, payment integration, and QR/barcode implementation.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: PostOffice,
    },
    {
      title: 'Agricultural Department Web Solution',
      description:
        'Comprehensive web solution with parcel tracking, registration, payment, and QR/barcode system.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: Agri,
    },
    {
      title: 'Police Fine Management System',
      description:
        'Online fine management system with tracking, registration, payment, and QR/barcode system.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: PoliceImage,
    },
    {
      title: 'Online Platform for Dambulla Economic Center',
      description:
        'Online management system with input foods, sell, bid, transport and manage selling prices.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: Dambulla,
    },
    {
      title: 'Gym Management System',
      description:
        'Web solution for manage gyms by track members, memberships, attendeds and revenue',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: Gym,
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <div className='font-bold text-xl text-primary'>
              Kanishka Dahampath
            </div>
            <div className='flex items-center gap-4'>
              <div className='hidden md:flex space-x-8'>
                <button
                  onClick={() => scrollToSection('home')}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  Contact
                </button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id='home'
        className='relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden'
      >
        {/* Background Elements */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10'></div>
        <div className='absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000'></div>

        <div className='container mx-auto relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-8'>
              {/* Status Badge */}
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                Available for opportunities
              </div>

              {/* Main Heading */}
              <div className='space-y-4'>
                <h1 className='text-5xl lg:text-7xl font-bold leading-tight animate-fade-in'>
                  <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                    Kanishka Dahampath
                  </span>
                </h1>
                <h2 className='text-2xl lg:text-3xl text-muted-foreground font-light animate-fade-in'>
                  Web Designer &{' '}
                  <span className='text-primary font-semibold'>
                    Web Developer
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className='text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in'>
                Motivated and detail-oriented Software Engineering graduate with
                a strong foundation in programming, problem-solving, and web
                development. Passionate about learning new technologies and
                applying theoretical knowledge to real-world projects.
              </p>

              {/* Stats */}
              <div className='flex gap-8 animate-fade-in'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary'>10+</div>
                  <div className='text-sm text-muted-foreground'>Projects</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary'>3+</div>
                  <div className='text-sm text-muted-foreground'>
                    Years Learning
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary'>10+</div>
                  <div className='text-sm text-muted-foreground'>
                    Technologies
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 animate-fade-in'>
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  size='lg'
                  className='bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group'
                >
                  <Sparkles className='w-4 h-4 mr-2 group-hover:animate-spin' />
                  View Portfolio
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  onClick={() => scrollToSection('contact')}
                  className='border-primary/20 hover:bg-primary/5 transition-all'
                >
                  <Mail className='w-4 h-4 mr-2' />
                  Get In Touch
                </Button>
              </div>

              {/* Skills Preview */}
              <div className='flex flex-wrap gap-2 animate-fade-in'>
                {['React.js', 'Node.js', 'Python', 'MongoDB', 'AWS'].map(
                  (skill) => (
                    <Badge key={skill} variant='secondary' className='text-xs'>
                      {skill}
                    </Badge>
                  )
                )}
              </div>
            </div>

            {/* Right Visual - Profile Photo */}
            <div className='flex justify-center lg:justify-end'>
              <div className='relative'>
                {/* Main Profile Image Container */}
                <div className='w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 p-2 relative overflow-hidden'>
                  {/* Profile Image */}
                  <div className='w-full h-full rounded-full overflow-hidden bg-background shadow-2xl'>
                    <img
                      src={ProfilePhoto}
                      alt='Kanishka Dahampath - Software Engineer'
                      className='w-full h-full object-cover object-center'
                    />
                  </div>

                  {/* Floating tech icons */}
                  <div className='absolute top-8 right-8 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-bounce backdrop-blur-sm'>
                    <Code size={20} className='text-primary' />
                  </div>
                  <div className='absolute bottom-12 left-4 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center animate-bounce delay-500 backdrop-blur-sm'>
                    <Database size={16} className='text-secondary' />
                  </div>
                  <div className='absolute top-20 left-8 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center animate-bounce delay-1000 backdrop-blur-sm'>
                    <Globe size={14} className='text-accent-foreground' />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse'></div>
                <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-700'></div>
                <div className='absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse delay-1000'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in'>
          <span className='text-sm text-muted-foreground'>
            Scroll to explore
          </span>
          <ArrowDown className='animate-bounce text-muted-foreground' />
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-16 px-6 bg-muted/30'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-16'>About Me</h2>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='lg:w-1/3'>
              <div className='w-80 h-80 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto p-8'>
                <div className='w-full h-full rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-xl'>
                  <svg
                    width='200'
                    height='200'
                    viewBox='0 0 200 200'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-primary'
                  >
                    {/* Books stack */}
                    <rect
                      x='30'
                      y='120'
                      width='60'
                      height='8'
                      rx='2'
                      fill='currentColor'
                      opacity='0.7'
                    />
                    <rect
                      x='35'
                      y='110'
                      width='50'
                      height='8'
                      rx='2'
                      fill='currentColor'
                      opacity='0.8'
                    />
                    <rect
                      x='40'
                      y='100'
                      width='40'
                      height='8'
                      rx='2'
                      fill='currentColor'
                      opacity='0.9'
                    />

                    {/* Graduation cap */}
                    <ellipse
                      cx='130'
                      cy='80'
                      rx='45'
                      ry='15'
                      fill='currentColor'
                    />
                    <rect
                      x='120'
                      y='65'
                      width='20'
                      height='15'
                      rx='2'
                      fill='currentColor'
                    />
                    <circle cx='130' cy='72' r='8' fill='currentColor' />

                    {/* Tassel */}
                    <line
                      x1='175'
                      y1='80'
                      x2='185'
                      y2='95'
                      stroke='currentColor'
                      strokeWidth='2'
                    />
                    <circle cx='185' cy='95' r='3' fill='currentColor' />

                    {/* Diploma scroll */}
                    <rect
                      x='120'
                      y='130'
                      width='50'
                      height='6'
                      rx='3'
                      fill='currentColor'
                      opacity='0.6'
                    />
                    <rect
                      x='115'
                      y='140'
                      width='60'
                      height='25'
                      rx='3'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                    />
                    <line
                      x1='125'
                      y1='148'
                      x2='165'
                      y2='148'
                      stroke='currentColor'
                      strokeWidth='1'
                      opacity='0.7'
                    />
                    <line
                      x1='125'
                      y1='155'
                      x2='160'
                      y2='155'
                      stroke='currentColor'
                      strokeWidth='1'
                      opacity='0.7'
                    />

                    {/* Academic building/university icon */}
                    <rect
                      x='50'
                      y='40'
                      width='100'
                      height='50'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                    />
                    <rect
                      x='60'
                      y='50'
                      width='12'
                      height='30'
                      fill='currentColor'
                      opacity='0.3'
                    />
                    <rect
                      x='78'
                      y='50'
                      width='12'
                      height='30'
                      fill='currentColor'
                      opacity='0.3'
                    />
                    <rect
                      x='96'
                      y='50'
                      width='12'
                      height='30'
                      fill='currentColor'
                      opacity='0.3'
                    />
                    <rect
                      x='114'
                      y='50'
                      width='12'
                      height='30'
                      fill='currentColor'
                      opacity='0.3'
                    />
                    <rect
                      x='132'
                      y='50'
                      width='12'
                      height='30'
                      fill='currentColor'
                      opacity='0.3'
                    />

                    {/* Roof triangle */}
                    <polygon
                      points='45,40 100,15 155,40'
                      fill='currentColor'
                      opacity='0.8'
                    />

                    {/* Stars for achievement */}
                    <circle
                      cx='170'
                      cy='30'
                      r='2'
                      fill='currentColor'
                      opacity='0.6'
                    />
                    <circle
                      cx='180'
                      cy='45'
                      r='1.5'
                      fill='currentColor'
                      opacity='0.6'
                    />
                    <circle
                      cx='25'
                      cy='35'
                      r='1.5'
                      fill='currentColor'
                      opacity='0.6'
                    />
                    <circle
                      cx='35'
                      cy='25'
                      r='2'
                      fill='currentColor'
                      opacity='0.6'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='lg:w-2/3'>
              <h3 className='text-2xl font-bold mb-6'>Education</h3>
              <div className='space-y-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      BSc in Software Engineering (First Class)
                    </CardTitle>
                    <CardDescription>
                      Cardiff Metropolitan University, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      Relevant coursework: Analytics and Business Intelligence,
                      Professional and Ethical Issues in IT, Computational
                      Intelligence, Advanced Programming, Final Project.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      Higher Diploma in Software Engineering
                    </CardTitle>
                    <CardDescription>
                      Cardiff Metropolitan University, 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      Relevant coursework: Data Structures & Algorithms, OOP,
                      Web Development, Database Management, Software Testing,
                      Artificial Intelligence.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>GCE Advanced Level</CardTitle>
                    <CardDescription>
                      St Anthony's College, Kandy, 2019
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      Physical Science (Math, Physics, Chemistry)
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className='mt-6'>
                <h4 className='text-lg font-semibold mb-2'>
                  Personal Qualities
                </h4>
                <div className='flex gap-2'>
                  <Badge>Strong Teamwork</Badge>
                  <Badge>Adaptability</Badge>
                  <Badge>Problem Solving</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-16 px-6'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-16'>
            Skills & Technologies
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skills.map((skillGroup, index) => (
              <Card key={index} className='hover:shadow-lg transition-shadow'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Code className='w-5 h-5 text-primary' />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant='secondary'>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-16 px-6 bg-muted/30'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-16'>Services</h2>
          <div className='max-w-4xl mx-auto'>
            <Card className='hover:shadow-lg transition-shadow'>
              <CardHeader className='text-center'>
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Code className='w-8 h-8 text-primary' />
                </div>
                <CardTitle className='text-2xl'>
                  Web Design & Development
                </CardTitle>
                <CardDescription className='text-lg'>
                  Clean, responsive websites with modern frameworks and best
                  practices
                </CardDescription>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-muted-foreground mb-4'>
                  I create user-friendly interfaces with performance
                  optimization, ensuring your website looks great and performs
                  excellently across all devices. From concept to deployment, I
                  handle the complete web development process.
                </p>
                <div className='flex justify-center gap-2 flex-wrap'>
                  <Badge>Responsive Design</Badge>
                  <Badge>Performance Optimization</Badge>
                  <Badge>Modern Frameworks</Badge>
                  <Badge>User Experience</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id='portfolio' className='py-16 px-6'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-16'>Portfolio</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <Card
                key={index}
                className='overflow-hidden hover:shadow-lg transition-shadow group'
              >
                <div className='aspect-video overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <CardHeader>
                  <CardTitle className='flex items-center justify-between'>
                    {project.title}
                    <ExternalLink className='w-4 h-4 text-muted-foreground' />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant='outline'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16 px-6 bg-muted/30'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-16'>Get In Touch</h2>
          <div className='max-w-4xl mx-auto grid lg:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                    <Mail className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <p className='font-medium'>Email</p>
                    <a
                      href='mailto:dahampathkanishka@gmail.com'
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      dahampathkanishka@gmail.com
                    </a>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                    <Phone className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <p className='font-medium'>Phone</p>
                    <a
                      href='tel:+94714073067'
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      +94 714073067
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Feel free to reach out for collaborations or just a friendly
                  chat!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Name
                    </label>
                    <input
                      type='text'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className='w-full text-black px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className='w-full text-black px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className='w-full text-black px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                      required
                    />
                  </div>
                  <Button type='submit' className='w-full'>
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-6 border-t'>
        <div className='container mx-auto text-center'>
          <p className='text-muted-foreground'>
            © 2025 Kanishka Dahampath. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
