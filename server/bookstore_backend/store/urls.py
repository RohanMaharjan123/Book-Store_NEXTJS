from django.urls import path
from .views.bookstore_views import BookstoreListCreateAPIView, BookstoreDetailAPIView
from .views.author_views import AuthorListCreateAPIView, AuthorDetailAPIView
from .views.category_views import CategoryListCreateAPIView, CategoryDetailAPIView
from .views.publisher_views import PublisherListCreateAPIView, PublisherDetailAPIView
from .views.book_views import BookListCreateAPIView, BookDetailAPIView
from .views.customer_views import CustomerListCreateAPIView, CustomerDetailAPIView
from .views.review_views import ReviewListCreateAPIView, ReviewDetailAPIView

urlpatterns = [
    path('bookstores/', BookstoreListCreateAPIView.as_view(), name='bookstore-list'),
    path('bookstores/<int:pk>/', BookstoreDetailAPIView.as_view(), name='bookstore-detail'),
    
    path('authors/', AuthorListCreateAPIView.as_view(), name='author-list'),
    path('authors/<int:pk>/', AuthorDetailAPIView.as_view(), name='author-detail'),
    
    path('categories/', CategoryListCreateAPIView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    
    path('publishers/', PublisherListCreateAPIView.as_view(), name='publisher-list'),
    path('publishers/<int:pk>/', PublisherDetailAPIView.as_view(), name='publisher-detail'),
    
    path('books/', BookListCreateAPIView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetailAPIView.as_view(), name='book-detail'),
    
    path('customers/', CustomerListCreateAPIView.as_view(), name='customer-list'),
    path('customers/<int:pk>/', CustomerDetailAPIView.as_view(), name='customer-detail'),
    
    path('reviews/', ReviewListCreateAPIView.as_view(), name='review-list'),
    path('reviews/<int:pk>/', ReviewDetailAPIView.as_view(), name='review-detail'),
]