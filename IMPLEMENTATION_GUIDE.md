# 前端优化实施指南

## 🎉 已完成的优化

### 1. ✅ 返回顶部按钮
**文件**: [components/scroll-to-top.tsx](components/scroll-to-top.tsx)

**特性**:
- 滚动超过 300px 时自动显示
- 平滑滚动动画
- 完整的键盘导航支持（focus-visible）
- 响应式定位（fixed bottom-8 right-8）

**使用方法**:
```tsx
// 已自动添加到 app/rd/layout.tsx
import { ScrollToTop } from '@/components/scroll-to-top'

<ScrollToTop />
```

---

### 2. ✅ 活跃部分检测
**文件**: [hooks/useActiveSection.ts](hooks/useActiveSection.ts)

**功能**: 使用 Intersection Observer 自动检测当前在视口中的部分

**使用方法**:
```tsx
'use client'

import { StickyNav } from '@/components/sticky-nav'
import { useActiveSection } from '@/hooks/useActiveSection'

const stickyNavItems = [
  { label: "Mission", href: "#mission" },
  { label: "Researchers", href: "#researchers" },
  // ...
]

export default function QDFPage() {
  const activeSection = useActiveSection(
    stickyNavItems.map(item => item.href)
  )

  return (
    <>
      <StickyNav items={stickyNavItems} activeSection={activeSection} />
      {/* ... rest of page */}
    </>
  )
}
```

**示例实现**（QDF 页面）:
```tsx
// app/rd/qdf/page.tsx (顶部添加)
'use client'

import { useActiveSection } from '@/hooks/useActiveSection'

// 在组件内部
const activeSection = useActiveSection(['#mission', '#researchers', '#focus-areas', '#join'])

// 传递给 StickyNav
<StickyNav items={stickyNavItems} activeSection={activeSection} />
```

---

### 3. ✅ 键盘导航和焦点样式

**改进内容**:

**a) globals.css 改进** ([app/globals.css](app/globals.css)):
- ✅ 全局 `focus-visible` 样式
- ✅ `prefers-reduced-motion` 支持
- ✅ 平滑滚动（`scroll-behavior: smooth`）
- ✅ Scrollbar 隐藏工具类

**b) StickyNav 改进** ([components/sticky-nav.tsx](components/sticky-nav.tsx)):
- ✅ 焦点时显示紫色轮廓
- ✅ 活跃链接有下划线指示器
- ✅ 改进的过渡动画

**视觉效果**:
- 活跃项: 紫色文本 + 底部紫色下划线
- 悬停: 文本变亮
- 键盘焦点: 紫色轮廓 + 偏移

---

### 4. ✅ 类型定义和常量

**文件**:
- [types/index.ts](types/index.ts) - 统一的类型定义
- [lib/constants.ts](lib/constants.ts) - 主题常量和间距

**为什么重要**:
- 提高代码可维护性
- 更好的 TypeScript 支持
- 便于后续主题切换实现

**使用方法**:
```tsx
import type { FeatureCardProps, StatCardProps } from '@/types'
import { COLORS, SPACING } from '@/lib/constants'

// 使用类型
const card: FeatureCardProps = {
  icon: <Icon />,
  title: "Title",
  description: "Description",
  featured: true
}

// 使用常量
className={`bg-${COLORS.primary} ${SPACING.navbarHeight}`}
```

---

## 🚀 如何应用动画组件到主页

### 当前状态
主页 ([app/rd/page.tsx](app/rd/page.tsx)) 目前**没有使用**已创建的动画组件。

### 实施步骤

#### 1. 添加导入
```tsx
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
```

#### 2. 为 Hero 区域添加淡入动画
```tsx
<AnimatedSection direction="fade" delay={0}>
  <section className="pt-24 pb-16..." aria-labelledby="hero-heading">
    <div className="max-w-7xl mx-auto text-center">
      <GradientText as="h1" id="hero-heading" className="...">
        TBC Research & Development
      </GradientText>
      {/* ... */}
    </div>
  </section>
</AnimatedSection>
```

#### 3. 为统计卡片添加交错动画
```tsx
<section className="py-20..." aria-labelledby="stats-heading">
  <div className="max-w-7xl mx-auto">
    <h2 id="stats-heading" className="sr-only">Research Statistics</h2>
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
```

#### 4. 为功能卡片添加动画
```tsx
<AnimatedSection direction="up" delay={0.2}>
  <section className="py-20..." aria-labelledby="what-we-do-heading">
    <div className="max-w-7xl mx-auto">
      <GradientText as="h2" id="what-we-do-heading" className="...">
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
```

#### 5. 为研究分支卡片添加动画
```tsx
<AnimatedSection direction="up" delay={0.3}>
  <section className="py-20..." aria-labelledby="organization-heading">
    <div className="max-w-7xl mx-auto">
      <GradientText as="h2" id="organization-heading" className="...">
        Organization Structure
      </GradientText>
      <p className="...">Our R&D Department is organized into three specialized research wings</p>
      <div className="grid lg:grid-cols-3 gap-8">
        {wingData.map((wing, i) => (
          <AnimatedCard key={i} index={i}>
            <WingCard
              wingCode={wing.code}
              title={wing.title}
              description={wing.description}
              collaborations={wing.collaborations}
            />
          </AnimatedCard>
        ))}
      </div>
    </div>
  </section>
</AnimatedSection>
```

---

## 📋 快速检查清单

使用这个清单来验证所有优化是否正确实施：

### 基础设施
- [x] ScrollToTop 组件已创建
- [x] useActiveSection hook 已创建
- [x] AnimatedSection 和 AnimatedCard 组件已创建
- [x] 类型定义文件已创建（types/index.ts）
- [x] 常量文件已创建（lib/constants.ts）

### 样式和无障碍访问
- [x] globals.css 包含焦点样式
- [x] globals.css 包含 prefers-reduced-motion
- [x] StickyNav 有焦点样式
- [x] StickyNav 有活跃状态指示器

### 页面集成
- [x] RD layout 包含 ScrollToTop
- [ ] 主页使用动画组件（**待实施**）
- [ ] QDF 页面使用 useActiveSection（**待实施**）
- [ ] CDS 页面使用 useActiveSection（**待实施**）
- [ ] GT 页面使用 useActiveSection（**待实施**）

---

## 🎯 下一步建议

### 立即实施（高优先级）
1. **在主页应用动画组件**
   - 预计时间: 15-20 分钟
   - 影响: 极大提升视觉吸引力

2. **在详细页面启用活跃状态检测**
   - QDF, CDS, GT 页面
   - 预计时间: 10 分钟/页面
   - 影响: 改善导航体验

### 短期改进（中优先级）
3. **添加跳过链接（Skip Link）**
   ```tsx
   // app/layout.tsx 顶部
   <a
     href="#main-content"
     className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded"
   >
     Skip to main content
   </a>
   ```

4. **为每个页面添加独立 metadata**
   - 参考 app/rd/qdf/metadata.ts
   - 为 CDS 和 GT 页面创建类似文件

### 长期优化（低优先级）
5. **实现主题切换器**
   - 使用已安装的 next-themes
   - 创建切换按钮组件

6. **Bundle 分析和优化**
   ```bash
   npm install @next/bundle-analyzer
   npm run build
   ```

7. **图片优化**
   - 使用 Next.js Image 组件
   - 添加 placeholder="blur"

---

## 🧪 测试建议

### 键盘导航测试
1. 按 Tab 键遍历所有交互元素
2. 确保焦点指示器清晰可见
3. 使用 Enter/Space 激活按钮和链接

### 响应式测试
1. 在移动设备（< 640px）上测试
2. 在平板（768px - 1024px）上测试
3. 在大屏幕（> 1280px）上测试

### 无障碍访问性测试
1. 使用屏幕阅读器（VoiceOver / NVDA）
2. 启用 "prefers-reduced-motion" 并测试动画
3. 使用 Lighthouse 运行无障碍访问性审计

---

## 📊 性能影响

### 新增的 Bundle 大小
- ScrollToTop: ~1KB
- useActiveSection: ~2KB
- AnimatedSection/Card: ~3KB (已有 Framer Motion)

**总计**: ~6KB（gzipped 后约 2-3KB）

### 性能提升
- ✅ 懒加载动画（减少初始渲染负担）
- ✅ Intersection Observer（原生 API，性能优秀）
- ✅ 按需触发动画（只在元素进入视口时）

---

## 🐛 故障排除

### 问题: ScrollToTop 按钮不显示
**解决方案**: 确保滚动了超过 300px

### 问题: 活跃状态检测不工作
**解决方案**:
1. 确保页面是客户端组件（'use client'）
2. 检查 section id 是否与 href 匹配（例如：`#mission` 对应 `id="mission"`）
3. 调整 IntersectionObserver 的 rootMargin

### 问题: 动画不流畅
**解决方案**:
1. 检查是否有大量的 DOM 节点
2. 使用 Chrome DevTools Performance 面板分析
3. 考虑减少同时触发的动画数量

---

需要帮助实施这些改进吗？可以从主页添加动画组件开始！
