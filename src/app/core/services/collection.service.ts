import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Collection } from 'src/app/models/collection-form.model';
import { Show } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private readonly STORAGE_KEY = 'movie_collections';
  private collectionsSubject = new BehaviorSubject<Collection[]>(this.loadCollections());

  constructor() { }

  get collections$(): Observable<Collection[]> {
    return this.collectionsSubject.asObservable();
  }

  get collections(): Collection[] {
    return this.collectionsSubject.value;
  }

  createCollection(formData: Collection): Collection {
    const newCollection: Collection = {
      ...formData,
      id: this.generateId(),
    };

    const updatedCollections = [...this.collections, newCollection];
    this.saveCollections(updatedCollections);
    this.collectionsSubject.next(updatedCollections);

    return newCollection;
  }

  getCollectionById(id: string): Collection | undefined {
    return this.collections.find(collection => collection.id === id);
  }

  deleteCollection(id: string): boolean {
    const collections = this.collections;
    const index = collections.findIndex(collection => collection.id === id);
    
    if (index === -1) {
      return false;
    }

    collections.splice(index, 1);
    this.saveCollections(collections);
    this.collectionsSubject.next([...collections]);
    
    return true;
  }

  clearAllCollections(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.collectionsSubject.next([]);
  }

  private loadCollections(): Collection[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert createdAt back to Date objects
        return parsed.map((collection: any) => ({
          ...collection,
        }));
      }
    } catch (error) {
      console.error('Error loading collections from localStorage:', error);
    }
    return [];
  }

  private saveCollections(collections: Collection[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(collections));
    } catch (error) {
      console.error('Error saving collections to localStorage:', error);
    }
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  addShowToCollection(collectionId: string, show: Show): void {
    const collections = this.collections.map(collection => {
      if (collection.id === collectionId) {
        // Avoid duplicate shows (optional)
        const alreadyExists = collection.shows?.some(s => s.id === show.id);
        if (!alreadyExists) {
          return {
            ...collection,
            shows: [...(collection.shows || []), show]
          };
        }
      }
      return collection;
    });

    this.saveCollections(collections);
    this.collectionsSubject.next(collections);
  }

  removeShowFromCollection(collectionId: string, showId: number): void {
    const updatedCollections = this.collections.map(collection => {
      if (collection.id === collectionId) {
        const currentShows = collection.shows || [];
        const filteredShows = currentShows.filter(show => show.id !== (showId));
        return {
          ...collection,
          shows: filteredShows
        };
      }
      return collection;
    });

    this.saveCollections(updatedCollections);
    this.collectionsSubject.next(updatedCollections);
  }
}
