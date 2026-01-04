import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../context/LanguageContext'

function Stats() {
    const { t } = useLanguage()
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    const stats = [
        { value: 14, suffix: '+', label: t.stats.certifications, icon: '📜' },
        { value: 2, suffix: '+', label: t.stats.yearsExp, icon: '💼' },
        { value: 18, suffix: '+', label: t.stats.technologies, icon: '💻' },
        { value: 100, suffix: '%', label: t.stats.commitment, icon: '📚' },
    ]

    return (
        <section className="py-16 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-xl p-6 text-center hover:border-neon-cyan/30 transition-colors"
                        >
                            <span className="text-3xl mb-3 block">{stat.icon}</span>
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                                {inView ? (
                                    <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
                                ) : (
                                    `0${stat.suffix}`
                                )}
                            </div>
                            <p className="text-text-muted text-sm mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Stats
