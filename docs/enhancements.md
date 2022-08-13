# Enhancements

## Summary

- [Remove structure decision for get steps](#remove-structure-decision-for-get-steps)

- [Reuse a header component in Steps](#reuse-header-component-in-steps)

---

## Remove decision structure for get steps

Replace decision structure _(if)_ by _context api_

### **Before**

```tsx
export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSended, setFeedbackSended] = useState(false);

  function handleFeedbackReset() { //...logic }

  return (
    <div className="...some-classes">

      {feedbackSended ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleFeedbackReset} />
      ) : (
        <>
          {feedbackType ? (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackResetRequest={handleFeedbackReset}
              onSendFeedback={setFeedbackSended}
            />
          ) : (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          )}
        </>
      )}

      <footer />
    </div>
  );
};
```

### **After**

```tsx
export const WidgetForm = () => {
  const { step, next, back, reset } = useStep()
  const { feedback, setFeedback } = useFeedback()

  return (
    <StepContext.Provider
      value={{ step, next, back, reset, feedback, setFeedback }}
    >
      <div className='...some-classes'>
        <StepsHelper step={step} />

        <footer />
      </div>
    </StepContext.Provider>
  )
}
```

---

## Reuse header component in Steps

Each step-page implements a header. The goal is create a flexible header component for reuse in each step

### **Before**

- [FeedbackTypeStep.tsx](../src/Widgets/WidgetForm/Steps/FeedbackTypeStep.tsx)

```tsx
<header>
  <span className='text-xl leading-10'>Insert your feedback</span>
  <CloseButton />
</header>
```

- [FeedbackContentStep.tsx](../src/Widgets/WidgetForm/Steps/FeedbackContentStep.tsx)

```tsx
<header className='mb-4'>
  <button
    className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
    type='button'
    onClick={onFeedbackResetRequest}
  >
    <ArrowLeft className='w-4 h-4' weight='bold' />
  </button>

  <span className='text-xl leading-6 flex items-center gap-2'>
    <img className='w-6 h-6' src={img.source} alt={img.alt} />
    {title}
  </span>

  <CloseButton />
</header>
```

- [FeedbackSuccessStep.tsx](../src/Widgets/WidgetForm/Steps/FeedbackSuccessStep.tsx)

```tsx
<header>
  <CloseButton />
</header>
```

### **After**

- [FeedbackTypeStep.tsx](../src/Widgets/WidgetForm/Steps/FeedbackTypeStep.tsx)

```tsx
<Header hideBackButton>Insert your feedback</Header>
```

- [FeedbackContentStep.tsx](../src/Widgets/WidgetForm/Steps/FeedbackContentStep.tsx)

```tsx
<Header onBackClick={back}>
  <span className='text-xl leading-6 flex items-center gap-2'>
    <img
      className='w-6 h-6'
      src={feedback?.img?.source}
      alt={feedback?.img?.alt}
    />
    {feedback?.feedbackType}
  </span>
</Header>
```

- [FeedbackSuccessStep.tsx](../src/Widgets/WidgetForm/Steps/FeedbackSuccessStep.tsx)

```tsx
<Header hideBackButton />
```

### [**Header Component**](../src/Widgets/WidgetForm/Steps/components/header/Header.tsx)

```tsx
<header className='mb-4'>
  {!hideBackButton && (
    <button
      className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
      type='button'
      onClick={onBackClick}
    >
      <ArrowLeft className='w-4 h-4' weight='bold' />
    </button>
  )}

  <span className='text-xl leading-6 flex items-center gap-2'>{children}</span>

  {!hideCloseButton && <CloseButton />}
</header>
```

---
