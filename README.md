# SFDX Lightning Sandbox
- A library of functional lightning components commonly used in SPA projects.

## Dev, Build and Test


## Resources


## Description of Files and Directories
1. `CounterComponent` - Component which demonstrates a basic counter
2. `PromiseComponent` - Component which demonstrates a promise
3. `DebounceComponent` - Component which demonstrates a debounce function
4. Event Components - Component which demonstrates messaging using events
  - `EventParentComponent` - *Parent Component*
  - `EventChild1Component` - *Child Component 1*
  - `EventChild2Component` - *Child Component 2*
  - `ParentCreateSomething` - *event template*
5. `ReactComponent` - Component which displays a React App. *(Salesforce API v39.0 only)*
  - Uses the `ReactComponentController` to transact with Salesforce

## Issues
1. `ReactComponent` only works for Salesforce API v39.0 as the `LockerService` prevents it from loading to the Lightning component.

