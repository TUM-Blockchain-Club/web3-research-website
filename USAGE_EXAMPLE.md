# 使用新组件的示例

## 更新主页以使用动画组件

以下是如何在 `app/rd/page.tsx` 中集成新的动画组件的示例：

### 1. 导入组件

\`\`\`tsx
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
\`\`\`

### 2. 为 Hero 区域添加动画

\`\`\`tsx
<AnimatedSection direction="fade" delay={0}>
  <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <GradientText as="h1" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
        TBC Research & Development
      </GradientText>
      {/* ... rest of hero content */}
    </div>
  </section>
</AnimatedSection>
\`\`\`

### 3. 为统计卡片添加交错动画

\`\`\`tsx
<section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {[
        { value: "3", label: "Research wings: C&DS + QDF + GT" },
        { value: "8", label: "C&DS researchers initiated (WS 25/26)" },
        { value: "2", label: "Active C&DS collaborations: TNAS + zkSecurity" },
        { value: "—", label: "Breakthroughs in all active collaborations" },
      ].map((stat, i) => (
        <AnimatedCard key={i} index={i}>
          <StatCard {...stat} />
        </AnimatedCard>
      ))}
    </div>
  </div>
</section>
\`\`\`

### 4. 为功能卡片添加动画

\`\`\`tsx
<AnimatedSection direction="up" delay={0.2}>
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-12">
        What We Do
      </GradientText>
      <div className="grid md:grid-cols-3 gap-8">
        {featureCards.map((card, i) => (
          <AnimatedCard key={i} index={i}>
            <FeatureCard {...card} />
          </AnimatedCard>
        ))}
      </div>
    </div>
  </section>
</AnimatedSection>
\`\`\`

### 5. 为研究分支卡片添加动画

\`\`\`tsx
<AnimatedSection direction="up" delay={0.3}>
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
    <div className="max-w-7xl mx-auto">
      <GradientText as="h2" className="text-3xl md:text-4xl font-bold text-center mb-4">
        Organization Structure
      </GradientText>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Our R&D Department is organized into three specialized research wings
      </p>
      <div className="grid lg:grid-cols-3 gap-8">
        {wingData.map((wing, i) => (
          <AnimatedCard key={i} index={i}>
            <WingCard {...wing} />
          </AnimatedCard>
        ))}
      </div>
    </div>
  </section>
</AnimatedSection>
\`\`\`

## 完整示例文件

你可以参考以下完整的文件结构：

\`\`\`
app/
  rd/
    page.tsx           # 主页（可以添加动画）
    loading.tsx        # ✅ 新增 - 加载状态
    error.tsx          # ✅ 新增 - 错误边界
    qdf/
      page.tsx         # QDF 页面
      metadata.ts      # ✅ 新增 - SEO metadata
    cds/
      page.tsx         # C&DS 页面
    gt/
      page.tsx         # GT 页面

components/
  animated-section.tsx # ✅ 新增 - 区域动画
  animated-card.tsx    # ✅ 新增 - 卡片动画
  gradient-text.tsx    # ✅ 更新 - 新配色
  feature-card.tsx     # ✅ 更新 - 新配色
  navbar.tsx
  sticky-nav.tsx       # ✅ 更新 - 修复定位
  ...

hooks/
  useInView.ts         # ✅ 新增 - 视口检测

config/
  site.ts              # ✅ 新增 - 站点配置
\`\`\`

## 注意事项

1. **性能考虑**:
   - AnimatedCard 使用 \`index * 0.1\` 作为延迟，如果卡片超过 10 个，考虑调整延迟计算
   - 对于超长列表，考虑使用虚拟滚动

2. **用户体验**:
   - 所有动画默认只触发一次（\`triggerOnce: true\`）
   - 如果需要重复触发，在 useInView 中设置 \`triggerOnce: false\`

3. **无障碍访问**:
   - 动画默认遵循用户的 \`prefers-reduced-motion\` 设置
   - Framer Motion 会自动处理这个问题

4. **调试**:
   - 在开发环境中，可以在浏览器的 DevTools 中使用 "Emulate prefers-reduced-motion" 来测试无动画版本
