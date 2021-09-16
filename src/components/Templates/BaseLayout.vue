<template>
  <div class="main">
    <div class="main__header">
      <slot name="header"></slot>
    </div>
    <div class="main__main-content">
      <slot></slot>
    </div>
    <div class="main__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
