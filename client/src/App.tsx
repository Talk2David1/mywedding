import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StagewiseToolbar } from "@stagewise/toolbar-react";
import ReactPlugin from "@stagewise-plugins/react";
import Home from "@/pages/home";
import OurStory from "@/pages/our-story";
import Gallery from "@/pages/gallery";
import Registry from "@/pages/registry";
import Schedule from "@/pages/schedule";
import RSVP from "@/pages/rsvp";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/registry" component={Registry} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/rsvp" component={RSVP} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <StagewiseToolbar 
          config={{
            plugins: [ReactPlugin]
          }}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
