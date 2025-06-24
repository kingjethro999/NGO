# NWAOKWU CARE FOUNDATION (NCF)

A modern, responsive website for NWAOKWU CARE FOUNDATION (NCF), built with Next.js, TypeScript, and Tailwind CSS. This website showcases the organization's mission, programs, and provides a donation platform to support their humanitarian efforts.

## 🌟 Features

### Design & User Experience
- **Modern & Responsive Design** - Beautiful UI that works on all devices
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Professional Color Scheme** - Carefully chosen colors that convey trust and compassion
- **Accessible Design** - Built with accessibility best practices

### Pages & Sections
- **Home Page** - Hero section, features, programs overview, impact statistics, and call-to-action
- **About Page** - Organization story, mission & vision, core values, and team information
- **Programs Page** - Detailed information about education, healthcare, community development, and emergency relief programs
- **Donate Page** - Secure donation form with multiple payment options and impact visualization

### Technical Features
- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NCF
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
NCF/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── programs/          # Programs page
│   ├── donate/            # Donate page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Home page hero
│   ├── FeaturesSection.tsx # Features showcase
│   ├── ProgramsSection.tsx # Programs overview
│   ├── ImpactSection.tsx  # Impact statistics
│   ├── CTASection.tsx     # Call-to-action
│   ├── AboutHero.tsx      # About page hero
│   ├── MissionSection.tsx # Mission & vision
│   ├── ValuesSection.tsx  # Core values
│   ├── TeamSection.tsx    # Team members
│   ├── ProgramsHero.tsx   # Programs page hero
│   ├── EducationProgram.tsx # Education program details
│   ├── HealthcareProgram.tsx # Healthcare program details
│   ├── CommunityProgram.tsx # Community development details
│   ├── EmergencyProgram.tsx # Emergency relief details
│   ├── DonateHero.tsx     # Donate page hero
│   ├── DonationForm.tsx   # Donation form
│   └── DonationImpact.tsx # Donation impact visualization
├── public/                # Static assets
│   ├── team/              # Team member images
│   └── programs/          # Program images
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Blue shades (#0ea5e9 to #0c4a6e)
- **Secondary**: Yellow shades (#eab308 to #713f12)  
- **Accent**: Purple shades (#d946ef to #701a75)

### Content
- Update text content in the respective component files
- Replace images in the `public/` directory
- Modify team information in `components/TeamSection.tsx`
- Update program details in individual program components

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom CSS classes are defined in the `@layer components` section

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions about this website, please contact:
- Email: info@ncfoundation.org
- Website: [ncfoundation.org](https://ncfoundation.org)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ for NWAOKWU CARE FOUNDATION (NCF)** 