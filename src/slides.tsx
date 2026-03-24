import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, AreaChart, Area } from 'recharts';
import { Scale, ShieldCheck, Flag, Smartphone, Users, Zap, Euro, TrendingUp, Clock, MapPin, CheckCircle2, ArrowRight, Globe, Shield, Map, MessageSquare, CreditCard, Server } from 'lucide-react';

const BRAND_NAME = "Équité";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const slides = [
  {
    id: 'cover',
    component: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2000&auto=format&fit=crop" 
            alt="Eiffel Tower at night" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl w-full px-12 flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="mb-6 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium tracking-wide uppercase">
            The first 0% Commission Subscription Platform for Paris
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 text-white">
            {BRAND_NAME}<span className="text-amber-500">.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light text-zinc-300 mb-12 max-w-2xl leading-tight">
            Empowering Drivers.<br/>
            <span className="font-medium text-white">Fairer Rides.</span>
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-auto pt-12 border-t border-zinc-800 w-full max-w-md">
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Presented by</p>
            <p className="text-zinc-200 font-medium">Founding Team</p>
          </motion.div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'problem',
    component: () => (
      <div className="w-full h-full flex flex-col md:flex-row bg-zinc-950">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">01 / The Problem</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">A Broken System.</motion.h3>
            
            <div className="space-y-8">
              {[
                { title: 'The "Commission Trap"', desc: 'Uber/Bolt take 25% of every single fare.', icon: Euro },
                { title: 'Inflation', desc: 'Rising fuel and insurance costs are crushing driver margins.', icon: TrendingUp },
                { title: 'Social Unrest', desc: 'Frequent driver protests in Paris against "Algorithm Dictatorship."', icon: Users },
                { title: 'High Churn', desc: 'Drivers have zero loyalty to existing apps.', icon: Clock },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-6 items-start group">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/50 transition-colors">
                    <item.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-zinc-100 mb-1">{item.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" 
            alt="Frustrated driver" 
            className="w-full h-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent" />
        </div>
      </div>
    )
  },
  {
    id: 'solution',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/30 rounded-l-[100px] -mr-20" />
        
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative z-10 h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">02 / The Solution</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-16">The "SaaS" Model.</motion.h3>
          
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-10 shadow-2xl">
              <div className="flex flex-col items-center justify-center space-y-8">
                <div className="flex items-center justify-between w-full max-w-sm p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                  <span className="text-xl font-medium text-zinc-300">Rider Fare</span>
                  <ArrowRight className="text-amber-500" />
                  <span className="text-2xl font-bold text-emerald-400">100% to Driver</span>
                </div>
                <div className="w-px h-12 bg-zinc-800" />
                <div className="flex items-center justify-between w-full max-w-sm p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                  <span className="text-xl font-medium text-zinc-300">Subscription</span>
                  <ArrowRight className="text-amber-500" />
                  <span className="text-2xl font-bold text-white">€150/mo to App</span>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-10">
              {[
                { title: '0% Commission', desc: 'Drivers keep every Euro the rider pays. No hidden fees.' },
                { title: 'Flat Monthly Fee', desc: 'Drivers pay a fixed subscription (e.g., €150/month).' },
                { title: 'Independence', desc: 'Drivers are treated as true entrepreneurs, not "gig workers."' },
                { title: 'Predictability', desc: 'The platform earns stable MRR (Monthly Recurring Revenue).' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-2xl font-medium text-zinc-100 mb-2">{item.title}</h4>
                    <p className="text-zinc-400 text-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'market',
    component: () => (
      <div className="w-full h-full flex flex-col md:flex-row bg-zinc-950">
        <div className="w-full md:w-1/2 relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop" 
            alt="Paris aerial" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border border-amber-500/30 rounded-full flex items-center justify-center bg-zinc-950/50 backdrop-blur-sm">
              <MapPin className="w-16 h-16 text-amber-500" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">03 / Market Opportunity</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">France & Paris.</motion.h3>
            
            <div className="space-y-12">
              <motion.div variants={itemVariants} className="border-l-2 border-amber-500 pl-6">
                <h4 className="text-3xl font-light text-zinc-100 mb-2">Market Size</h4>
                <p className="text-xl text-zinc-400">Over <strong className="text-white font-semibold">30,000</strong> licensed VTC drivers in the Île-de-France region.</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="border-l-2 border-amber-500 pl-6">
                <h4 className="text-3xl font-light text-zinc-100 mb-2">Target Segment</h4>
                <p className="text-xl text-zinc-400">Focus exclusively on the Paris <strong className="text-white font-semibold">High-End (Berline)</strong> and <strong className="text-white font-semibold">Airport</strong> segments first.</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="border-l-2 border-amber-500 pl-6">
                <h4 className="text-3xl font-light text-zinc-100 mb-2">Perfect Timing</h4>
                <p className="text-xl text-zinc-400">Post-Olympic Paris is seeking <strong className="text-white font-semibold">"Ethical Tech"</strong> alternatives amidst high anti-Uber sentiment.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 'validation',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">04 / Market Validation</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">Proven in the US. Blue Ocean in Paris.</motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Empower', region: 'United States', desc: 'Tens of thousands of drivers saving millions in commission. Flat subscription model.', icon: Globe },
              { name: 'Wridz', region: 'United States', desc: 'Expanding across mid-sized US markets. 100% take-home pay with a focus on safety.', icon: Shield },
              { name: 'inDrive', region: 'Global', desc: 'Proved that drivers and riders are desperate for alternatives to algorithmic pricing.', icon: TrendingUp },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col">
                <item.icon className="w-10 h-10 text-amber-500 mb-6" />
                <h4 className="text-2xl font-semibold text-white mb-2">{item.name}</h4>
                <p className="text-amber-500/80 text-sm font-mono mb-4">{item.region}</p>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-medium text-amber-400 mb-2">The Paris Opportunity</h4>
            <p className="text-zinc-300 text-lg">No one has successfully captured the premium European market (Paris Berline) with the SaaS model yet. This is our blue ocean.</p>
          </motion.div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'competition',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">05 / Competitive Landscape</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">The Paris Battlefield.</motion.h3>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Uber', 
                role: 'The Incumbent',
                share: '~60% Share',
                weakness: '25% commission, high driver resentment, algorithmic pricing unpredictability.',
                color: 'border-zinc-700'
              },
              { 
                name: 'Bolt', 
                role: 'The Challenger',
                share: '~25% Share',
                weakness: 'Competing purely on price, squeezing driver margins further, zero driver loyalty.',
                color: 'border-emerald-500/30'
              },
              { 
                name: 'Heetch & Others', 
                role: 'Local Players',
                share: '~15% Share',
                weakness: 'Still charging 15-20% commission. Struggling to differentiate on supply.',
                color: 'border-blue-500/30'
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className={`bg-zinc-900/50 border ${item.color} rounded-3xl p-8 flex flex-col relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl font-bold text-white">{i + 1}</div>
                <h4 className="text-3xl font-bold text-white mb-1">{item.name}</h4>
                <p className="text-amber-500 font-mono text-sm mb-6">{item.role} • {item.share}</p>
                
                <div className="mt-auto">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Key Weakness</p>
                  <p className="text-zinc-300 text-lg leading-relaxed">{item.weakness}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-medium text-amber-400 mb-2">The {BRAND_NAME} Exploit</h4>
              <p className="text-zinc-300 text-lg">By shifting to a 0% commission SaaS model, we instantly capture the market's most constrained resource: <strong className="text-white">Driver Supply.</strong></p>
            </div>
            <div className="hidden md:flex w-16 h-16 rounded-full bg-amber-500/20 items-center justify-center shrink-0 ml-8">
              <Zap className="w-8 h-8 text-amber-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'value-prop',
    component: () => {
      const data = [
        { name: 'Traditional App', Takehome: 3750, Commission: 1250 },
        { name: BRAND_NAME, Takehome: 4850, Commission: 150 },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">06 / Driver Value Proposition</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">The Math.</motion.h3>
            
            <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
                  <h4 className="text-zinc-400 mb-2">Traditional App</h4>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-xl">€5,000 Turnover</span>
                    <span className="text-red-400">- €1,250 Commission (25%)</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-zinc-500">Net to Driver</span>
                    <span className="text-3xl font-bold text-white">€3,750</span>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full" />
                  <h4 className="text-amber-400 mb-2">{BRAND_NAME}</h4>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-xl">€5,000 Turnover</span>
                    <span className="text-amber-500">- €150 Subscription</span>
                  </div>
                  <div className="pt-4 border-t border-amber-500/20 flex justify-between items-center">
                    <span className="text-zinc-400">Net to Driver</span>
                    <span className="text-4xl font-bold text-white">€4,850</span>
                  </div>
                </div>

                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <p className="text-emerald-400 text-xl font-medium text-center">
                    Outcome: <strong className="text-2xl text-emerald-300">+€1,100 extra per month</strong> in the driver's pocket.
                  </p>
                  <p className="text-center text-zinc-400 mt-2 text-sm">The ultimate "Growth Hack" for driver supply.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-1/2 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="name" stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} tickFormatter={(value) => `€${value}`} />
                    <RechartsTooltip 
                      cursor={{fill: '#27272a', opacity: 0.4}}
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar dataKey="Takehome" name="Driver Take-home" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                    <Bar dataKey="Commission" name="Platform Fee" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }
  },
  {
    id: 'financials',
    component: () => {
      const data = [
        { name: 'Gross Profit', value: 120.65, color: '#10b981' },
        { name: 'Mapping APIs', value: 16.00, color: '#f59e0b' },
        { name: 'Comms/SMS', value: 6.00, color: '#3b82f6' },
        { name: 'Servers/DB', value: 5.00, color: '#8b5cf6' },
        { name: 'Payment Fees', value: 2.35, color: '#ef4444' },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">07 / Unit Economics</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">80% Gross Margin SaaS.</motion.h3>

            <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-6">
                <div className="mb-8">
                  <p className="text-zinc-400 text-xl mb-2">Monthly Revenue per Driver</p>
                  <p className="text-6xl font-bold text-white tracking-tighter">€150.00</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-zinc-300 border-b border-zinc-800 pb-2">COGS Breakdown (Est. 200 rides/mo)</h4>
                  {[
                    { title: 'Mapping & Location APIs', cost: '€16.00', icon: Map, color: 'text-amber-500' },
                    { title: 'Communication (SMS/Calls)', cost: '€6.00', icon: MessageSquare, color: 'text-blue-500' },
                    { title: 'Cloud Servers & DB', cost: '€5.00', icon: Server, color: 'text-purple-500' },
                    { title: 'Payment Processing (Stripe)', cost: '€2.35', icon: CreditCard, color: 'text-red-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="text-zinc-300">{item.title}</span>
                      </div>
                      <span className="text-zinc-400 font-mono">{item.cost}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex justify-between items-center">
                  <span className="text-emerald-400 text-xl font-medium">Gross Profit</span>
                  <span className="text-3xl font-bold text-emerald-300">€120.65 <span className="text-lg font-normal opacity-80">/ mo</span></span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-1/2 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={120}
                      outerRadius={160}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`€${value}`, 'Amount']}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center text-zinc-500 mt-4 text-sm">Highly scalable SaaS economics applied to mobility.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }
  },
  {
    id: 'projections',
    component: () => {
      const data = [
        { year: 'Year 1', MRR: 0.15, EBITDA: -0.5, DAC: 300 },
        { year: 'Year 2', MRR: 0.45, EBITDA: -0.2, DAC: 200 },
        { year: 'Year 3', MRR: 1.05, EBITDA: 0.4, DAC: 120 },
        { year: 'Year 4', MRR: 1.80, EBITDA: 1.2, DAC: 80 },
        { year: 'Year 5', MRR: 2.70, EBITDA: 2.1, DAC: 50 },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">08 / Financial Projections</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">Path to Profitability.</motion.h3>

            <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/3 space-y-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <h4 className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Year 5 Target MRR</h4>
                  <p className="text-4xl font-bold text-white">€2.7M</p>
                  <p className="text-amber-500/80 text-sm mt-2">18,000 Active Drivers</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <h4 className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Driver Acquisition Cost (DAC)</h4>
                  <p className="text-4xl font-bold text-white">€300 <span className="text-xl text-zinc-500">→ €50</span></p>
                  <p className="text-emerald-500/80 text-sm mt-2">Decreases via network effects</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <h4 className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Profitability</h4>
                  <p className="text-4xl font-bold text-white">Year 3</p>
                  <p className="text-blue-500/80 text-sm mt-2">EBITDA positive at 7,000 drivers</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-2/3 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorMRR" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorEBITDA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="year" stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} tickFormatter={(value) => `€${value}M`} />
                    <RechartsTooltip 
                      cursor={{stroke: '#27272a', strokeWidth: 2}}
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                      formatter={(value, name) => [`€${value}M`, name]}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Area type="monotone" dataKey="MRR" name="Monthly Recurring Revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorMRR)" />
                    <Area type="monotone" dataKey="EBITDA" name="EBITDA" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorEBITDA)" />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }
  },
  {
    id: 'regulatory',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950 items-center justify-center">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full max-w-5xl">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">09 / Foundation</h2>
            <h3 className="text-5xl font-bold tracking-tight">Regulatory & Legal Roadmap.</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Scale, title: 'Entity & Licensing', desc1: 'French SAS (Société par Actions Simplifiée).', desc2: 'Registered as "Centrale de Réservation" via the REVTC.' },
              { icon: ShieldCheck, title: 'Compliance', desc1: 'Full Loi LOM compliance.', desc2: 'Strict GDPR adherence for user data protection.' },
              { icon: Flag, title: 'Insurance', desc1: 'Platform-wide Professional Liability.', desc2: '(RC Pro) coverage.' },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 flex flex-col items-center text-center hover:bg-zinc-900 transition-colors">
                <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8">
                  <item.icon className="w-10 h-10 text-amber-500" />
                </div>
                <h4 className="text-2xl font-semibold text-zinc-100 mb-6">{item.title}</h4>
                <p className="text-zinc-400 mb-2">{item.desc1}</p>
                <p className="text-zinc-400">{item.desc2}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'tech',
    component: () => (
      <div className="w-full h-full flex flex-col md:flex-row bg-zinc-950">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">10 / Tech Strategy</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">The MVP.</motion.h3>
            
            <div className="space-y-10">
              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <Smartphone className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-100 mb-2">Engine</h4>
                  <p className="text-zinc-400 text-lg">High-end White-Label solution for rapid time-to-market.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <Zap className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-100 mb-2">Key Features</h4>
                  <p className="text-zinc-400 text-lg">Subscription billing, priority dispatch, and French language localization.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <Euro className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-100 mb-2">Payment</h4>
                  <p className="text-zinc-400 text-lg">Integrated with Stripe Connect for instant driver payouts.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 relative hidden md:flex items-center justify-center bg-zinc-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)]" />
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="relative w-64 h-[500px] bg-zinc-950 rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden"
          >
            <div className="w-full h-full flex flex-col">
              <div className="h-20 bg-zinc-900 flex items-end justify-between px-6 pb-4">
                <div className="w-8 h-8 rounded-full bg-zinc-800" />
                <div className="w-24 h-4 rounded bg-zinc-800" />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="w-full h-32 rounded-2xl bg-zinc-900" />
                <div className="w-full h-16 rounded-xl bg-zinc-900" />
                <div className="w-full h-16 rounded-xl bg-zinc-900" />
              </div>
              <div className="h-24 bg-zinc-900 rounded-t-3xl mt-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 'open-source',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">11 / The Open Source Advantage</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">Built on Trust & Community.</motion.h3>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: 'Transparency & Trust', 
                desc: 'By open-sourcing our pricing and matching algorithms, we prove to drivers and riders that there are no hidden fees or biased dispatching.',
                color: 'text-emerald-500',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20'
              },
              { 
                icon: Users, 
                title: 'Community-Driven Innovation', 
                desc: 'Global developers can contribute features, optimize algorithms, and build localized extensions faster than a traditional startup.',
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20'
              },
              { 
                icon: Server, 
                title: 'Security & Reliability', 
                desc: '"Given enough eyeballs, all bugs are shallow." Public code means thousands of developers can audit vulnerabilities before they become issues.',
                color: 'text-amber-500',
                bg: 'bg-amber-500/10',
                border: 'border-amber-500/20'
              },
              { 
                icon: Globe, 
                title: 'Ecosystem & Integrations', 
                desc: 'Third-party services can easily build plugins and analytics tools without needing special API access or business development meetings.',
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20'
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className={`p-8 rounded-3xl border ${item.border} bg-zinc-900/50 flex flex-col`}>
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h4 className="text-2xl font-semibold text-zinc-100 mb-3">{item.title}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'defensibility',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">12 / Defensibility & Moat</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">Execution &gt; Code.</motion.h3>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                risk: 'The "Copycat" Risk', 
                mitigation: 'Code can be copied, but Network Effects cannot. Our moat is the localized liquidity of drivers and riders in Paris, not just the software.',
                icon: Users
              },
              { 
                risk: 'Security Vulnerabilities', 
                mitigation: 'We employ a "Core-Open" model. Sensitive infrastructure (payments, PII) remains proprietary, while matching and pricing algorithms are public for audit.',
                icon: Shield
              },
              { 
                risk: 'The "Forking" Threat', 
                mitigation: 'By maintaining a transparent, fair 0% commission model, we align incentives perfectly. A community has no reason to fork a platform that already serves them optimally.',
                icon: Flag
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-red-400 mb-2">Risk: {item.risk}</h4>
                <div className="w-full h-px bg-zinc-800 my-4" />
                <h4 className="text-sm font-mono text-emerald-400 mb-2 uppercase tracking-wider">Mitigation</h4>
                <p className="text-zinc-300 leading-relaxed">{item.mitigation}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="mt-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center">
            <p className="text-zinc-300 text-lg">Investors often overvalue proprietary code. In mobility, the ultimate defensible asset is <strong className="text-white">Brand Trust and Driver Supply.</strong></p>
          </motion.div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'tech-roadmap',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950 overflow-y-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="min-h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">13 / Technical Roadmap</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">How We Build It.</motion.h3>
          
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Tech Stack & Tools */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">The Tech Stack (Fast & Modern)</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-amber-500 font-mono text-sm uppercase tracking-wider mb-2">Frontend (Rider & Driver Apps)</h5>
                    <p className="text-zinc-300"><strong className="text-white">React Native (with Expo)</strong></p>
                    <p className="text-zinc-400 text-sm mt-1">Why: Write code once in JavaScript/TypeScript, deploy to both iOS and Android instantly. Expo handles the complex native setup.</p>
                  </div>
                  
                  <div>
                    <h5 className="text-amber-500 font-mono text-sm uppercase tracking-wider mb-2">Backend (The Brain)</h5>
                    <p className="text-zinc-300"><strong className="text-white">Node.js with Express & TypeScript</strong></p>
                    <p className="text-zinc-400 text-sm mt-1">Why: Fast, scalable, and uses the same language as the frontend. Perfect for handling thousands of concurrent real-time connections.</p>
                  </div>

                  <div>
                    <h5 className="text-amber-500 font-mono text-sm uppercase tracking-wider mb-2">Database & Real-time</h5>
                    <p className="text-zinc-300"><strong className="text-white">PostgreSQL (Data) + Redis (Real-time)</strong></p>
                    <p className="text-zinc-400 text-sm mt-1">Why: Postgres for secure user/payment data. Redis for ultra-fast driver location tracking and matching.</p>
                  </div>
                  
                  <div>
                    <h5 className="text-amber-500 font-mono text-sm uppercase tracking-wider mb-2">IDE (Coding Application)</h5>
                    <p className="text-zinc-300"><strong className="text-white">Cursor or VS Code</strong></p>
                    <p className="text-zinc-400 text-sm mt-1">Why: Cursor is an AI-first fork of VS Code that writes code with you, drastically speeding up development.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Step-by-Step Process */}
            <motion.div variants={itemVariants} className="space-y-6">
               <h4 className="text-2xl font-bold text-white mb-2">Step-by-Step Execution</h4>
               
               <div className="relative pl-8 border-l border-zinc-800 space-y-8">
                 {[
                   {
                     step: 'Phase 1: Architecture & Backend Setup (Weeks 1-3)',
                     details: 'Set up the Node.js server, PostgreSQL database schema (Users, Rides, Payments), and configure Stripe Connect for the €150/mo subscription and 0% commission payouts.'
                   },
                   {
                     step: 'Phase 2: The Driver App (Weeks 4-7)',
                     details: 'Build the React Native app for drivers. Focus on real-time GPS tracking (sending location to Redis), ride acceptance logic, and the earnings dashboard.'
                   },
                   {
                     step: 'Phase 3: The Rider App (Weeks 8-10)',
                     details: 'Build the rider interface. Integrate Google Maps API for routing/pricing estimates, and implement the ride request flow via WebSockets to the backend.'
                   },
                   {
                     step: 'Phase 4: The Matching Engine (Weeks 11-12)',
                     details: 'Develop the algorithm that connects a rider request to the nearest available driver using geospatial queries in Redis.'
                   },
                   {
                     step: 'Phase 5: Testing & Beta (Weeks 13-16)',
                     details: 'Deploy to AWS or Google Cloud. Run a closed beta with 50 drivers in Paris to stress-test the real-time matching and payment flows.'
                   }
                 ].map((item, i) => (
                   <div key={i} className="relative">
                     <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-amber-500" />
                     <h5 className="text-lg font-semibold text-zinc-100 mb-1">{item.step}</h5>
                     <p className="text-zinc-400 text-sm leading-relaxed">{item.details}</p>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'acquisition',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">14 / Go-To-Market</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-16">Rider Acquisition Strategy.</motion.h3>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'The "Ethical Alternative"', 
                desc: 'Market to riders as the brand that treats drivers fairly. Consumers increasingly care about the gig economy impact.',
                highlight: 'Brand Positioning'
              },
              { 
                title: 'Guerrilla Marketing', 
                desc: 'Leveraging drivers to hand out referral codes to their current passengers on other apps.',
                highlight: 'Driver-Led Growth'
              },
              { 
                title: 'Niche Focus', 
                desc: 'Partnerships with Paris hotels, luxury boutiques, and business districts (La Défense).',
                highlight: 'B2B & Premium'
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <div className="h-full bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 flex flex-col relative z-10">
                  <span className="text-xs font-mono text-amber-500 mb-6 uppercase tracking-wider">{item.highlight}</span>
                  <h4 className="text-3xl font-light text-white mb-6">{item.title}</h4>
                  <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'roadmap',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950 justify-center">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">15 / Execution</h2>
            <h3 className="text-5xl font-bold tracking-tight">The Roadmap (Day 1 - Month 12).</h3>
          </motion.div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { time: 'Months 1-2', title: 'Foundation', desc: 'Legal setup, REVTC registration, and Tech customization.' },
                { time: 'Months 3-4', title: 'Supply', desc: 'Driver Onboarding (The "Founding 500" - 3 months free).' },
                { time: 'Month 5', title: 'Launch', desc: 'Official Launch in Paris Central.' },
                { time: 'Months 6-12', title: 'Scale', desc: 'Scale marketing to riders; achieve 5,000 active users.' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="relative pt-8 md:pt-0">
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-zinc-950" />
                  <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-6 ${i % 2 === 0 ? 'md:mb-16' : 'md:mt-16'}`}>
                    <span className="text-amber-500 font-mono text-sm mb-2 block">{item.time}</span>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'funding',
    component: () => {
      const data = [
        { name: 'Marketing', value: 40, color: '#f59e0b' },
        { name: 'Technology', value: 30, color: '#10b981' },
        { name: 'Operations', value: 20, color: '#3b82f6' },
        { name: 'Reserve', value: 10, color: '#6366f1' },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">16 / Ask</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">Seed Funding Request.</motion.h3>
            
            <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/2">
                <div className="mb-12">
                  <p className="text-zinc-400 text-xl mb-2">Target Raise</p>
                  <p className="text-7xl font-bold text-white tracking-tighter">€450,000</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: 'Marketing (40%)', desc: 'Rider acquisition & Brand building.', color: 'bg-amber-500' },
                    { title: 'Technology (30%)', desc: 'App maintenance, API fees, and customization.', color: 'bg-emerald-500' },
                    { title: 'Operations (20%)', desc: 'Legal, Insurance, and Core Team.', color: 'bg-blue-500' },
                    { title: 'Reserve (10%)', desc: 'The "Liquidity Gap" buffer.', color: 'bg-indigo-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-4 h-4 rounded-full mt-1.5 ${item.color}`} />
                      <div>
                        <h4 className="text-xl font-medium text-white">{item.title}</h4>
                        <p className="text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-1/2 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={100}
                      outerRadius={160}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value}%`, 'Allocation']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }
  },
  {
    id: 'vision',
    component: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Diverse team" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl w-full px-12 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-8">17 / The Vision</motion.h2>
          
          <motion.h3 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
            Join the Revolution.
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-light text-zinc-300 mb-12 leading-relaxed">
            Building a sustainable, fair, and profitable future for mobility in Paris.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold rounded-full text-lg transition-colors">
              Invest in {BRAND_NAME}
            </button>
          </motion.div>
        </motion.div>
      </div>
    )
  }
];
